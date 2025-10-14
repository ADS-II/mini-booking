package com.example.coworking.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.coworking.dto.ConfirmacionDTO;
import com.example.coworking.dto.ReservaDTO;
import com.example.coworking.model.Espacio;
import com.example.coworking.model.Pago;
import com.example.coworking.model.Reserva;
import com.example.coworking.model.Usuario;
import com.example.coworking.model.Estado;
import com.example.coworking.model.EstadoPago;
import com.example.coworking.model.EstadoReserva;
import com.example.coworking.model.MetodoPago;
import com.example.coworking.repository.EspacioRepository;
import com.example.coworking.repository.EstadoPagoRepository;
import com.example.coworking.repository.EstadoRepository;
import com.example.coworking.repository.EstadoReservaRepository;
import com.example.coworking.repository.MetodoPagoRepository;
import com.example.coworking.repository.PagoRepository;
import com.example.coworking.repository.ReservaRepository;
import com.example.coworking.repository.UsuarioRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Service
public class ReservaService {
    private final ReservaRepository reservaRepo;
    private final UsuarioRepository usuarioRepo;
    private final EspacioRepository espacioRepo;
    private final PagoRepository pagoRepo;
    private final EstadoRepository estadoRepo;
    private final EstadoReservaRepository estadoReservaRepository;
    private final EstadoPagoRepository estadoPagoRepository;
    private final MetodoPagoRepository metodoPagoRepository;

    public ReservaService(ReservaRepository reservaRepo,
            UsuarioRepository usuarioRepo,
            EspacioRepository espacioRepo,
            PagoRepository pagoRepo,
            EstadoReservaRepository estadoReservaRepository,
            EstadoPagoRepository estadoPagoRepository,
            MetodoPagoRepository metodoPagoRepository,
            EstadoRepository estadoRepo) {
        this.reservaRepo = reservaRepo;
        this.usuarioRepo = usuarioRepo;
        this.espacioRepo = espacioRepo;
        this.pagoRepo = pagoRepo;
        this.estadoRepo = estadoRepo;
        this.estadoReservaRepository = estadoReservaRepository;
        this.estadoPagoRepository = estadoPagoRepository;
        this.metodoPagoRepository = metodoPagoRepository;
    }

    public List<ReservaDTO> listarReservas() {
        return reservaRepo.findAllWithDetails();
    }

    public ResponseEntity<?> crearReserva(Integer idEspacio, String email, String nombre,
            LocalDateTime fechaInicio,
            LocalDateTime fechaFin,
            String estadoPago, String metodoPago, Double monto) {
        try {
            // Validar que la fecha de inicio no sea en el pasado
            LocalDateTime ahora = LocalDateTime.now();
            if (fechaInicio.isBefore(ahora.minusMinutes(5))) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("error", "La fecha de inicio no puede ser en el pasado"));
            }

            // Validar que no exceda 30 días
            if (fechaFin.isAfter(ahora.plusDays(30))) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("error", "La reserva no puede exceder 30 días en el futuro"));
            }

            // Buscar el espacio
            Espacio espacio = espacioRepo.findById(idEspacio)
                    .orElseThrow(() -> new IllegalArgumentException("Espacio no encontrado"));

            // CORRECCION CRITICA: Validar disponibilidad con parámetros en orden correcto
            // Parámetros correctos: espacio, fechaFin (para comparar con inicio existente), fechaInicio (para comparar con fin existente)
            boolean ocupado = reservaRepo.existsByEspacioAndFechaInicioBeforeAndFechaFinAfter(
                    espacio, fechaFin, fechaInicio);

            // Si está ocupado, retornar 409 Conflict
            if (ocupado) {
                return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(Map.of("error", "El espacio ya está ocupado en esas fechas y horarios"));
            }

            // Actualizar el estado del espacio a ocupado
            Estado estado = estadoRepo.findById(2)
                    .orElseThrow(() -> new IllegalArgumentException("Estado no encontrado"));

            // Buscar estado de reserva "Pendiente"
            EstadoReserva estadoReserva = estadoReservaRepository.findByNombre("Pendiente");
            if (estadoReserva == null) {
                throw new IllegalArgumentException("Estado de reserva no encontrado");
            }

            MetodoPago metodoPagoEncontrado = metodoPagoRepository.findByNombre(metodoPago);
            if (metodoPagoEncontrado == null) {
                throw new IllegalArgumentException("Metodo de pago no encontrado");
            }

            EstadoPago estadoPagoEncontrado = estadoPagoRepository.findByNombre(estadoPago);
            if (estadoPagoEncontrado == null) {
                throw new IllegalArgumentException("Estado de pago no encontrado");
            }

            espacio.setEstado(estado);
            espacioRepo.save(espacio);

            // Buscar o crear usuario
            Usuario usuario = usuarioRepo.findByEmail(email);
            if (usuario == null) {
                usuario = new Usuario();
                usuario.setEmail(email);
                usuario.setNombre(nombre);
                usuarioRepo.save(usuario);
            }

            // Crear reserva
            Reserva reserva = new Reserva();
            reserva.setUsuario(usuario);
            reserva.setEspacio(espacio);
            reserva.setFechaInicio(fechaInicio);
            reserva.setFechaFin(fechaFin);
            reserva.setEstado(estadoReserva);

            reserva = reservaRepo.save(reserva);

            // Crear el pago asociado
            Pago pago = new Pago();
            pago.setReserva(reserva);
            pago.setMonto(monto);
            pago.setMetodoPago(metodoPagoEncontrado);
            pago.setEstado(estadoPagoEncontrado);
            
            pagoRepo.save(pago);
            
            // Retornar confirmación con status 200
            ConfirmacionDTO confirmacionDTO = new ConfirmacionDTO("Reserva creada exitosamente");
            return new ResponseEntity<>(confirmacionDTO, HttpStatus.OK);
            
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(Map.of("error", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("error", "Error interno del servidor: " + e.getMessage()));
        }
    }

    public void actualizarReserva(Integer idReserva, LocalDateTime fechaInicio, LocalDateTime fechaFin, String estado) {

        // Buscar por el id de reserva si existe
        Reserva reserva = reservaRepo.findById(idReserva)
                .orElseThrow(() -> new IllegalArgumentException("La reserva no existe."));

        // Validar si está disponible para las nuevas fechas
        boolean espacioOcupado = reservaRepo.existsByEspacioAndFechaInicioBetweenAndFechaFinBetweenAndIdNot(
                reserva.getEspacio(),
                fechaInicio,
                fechaFin,
                reserva.getId());

        // En caso de que ya esté ocupado (siempre se excluye la actual)
        if (espacioOcupado) {
            throw new IllegalArgumentException("El espacio está ocupado en las fechas indicadas.");
        }

        // Actualizar con la información nueva
        reserva.setFechaInicio(fechaInicio);
        reserva.setFechaFin(fechaFin);
        EstadoReserva estadoReserva = estadoReservaRepository.findByNombre(estado);
        if (estadoReserva == null) {
            throw new IllegalArgumentException("Estado de reserva no encontrado");
        }
        reserva.setEstado(estadoReserva);

        // Guardar la información
        reservaRepo.save(reserva);
    }
}