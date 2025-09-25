package com.example.coworking.service;

import org.springframework.stereotype.Service;
import com.example.coworking.dto.ReservaDTO;
import com.example.coworking.model.Espacio;
import com.example.coworking.model.Pago;
import com.example.coworking.model.Reserva;
import com.example.coworking.model.Usuario;
import com.example.coworking.repository.EspacioRepository;
import com.example.coworking.repository.PagoRepository;
import com.example.coworking.repository.ReservaRepository;
import com.example.coworking.repository.UsuarioRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ReservaService {
    private final ReservaRepository reservaRepo;
    private final UsuarioRepository usuarioRepo;
    private final EspacioRepository espacioRepo;
    private final PagoRepository pagoRepo;

    public ReservaService(ReservaRepository reservaRepo,
            UsuarioRepository usuarioRepo,
            EspacioRepository espacioRepo,
            PagoRepository pagoRepo) {
        this.reservaRepo = reservaRepo;
        this.usuarioRepo = usuarioRepo;
        this.espacioRepo = espacioRepo;
        this.pagoRepo = pagoRepo;
    }

    public List<ReservaDTO> listarReservas() {
        return reservaRepo.findAllWithDetails();
    }

    public Reserva crearReserva(Long idEspacio, String email, LocalDateTime fechaInicio, LocalDateTime fechaFin,
            String estadoPago, String metodoPago, Double monto) {

        // buscamos el email, para relacionarlo
        Usuario usuario = usuarioRepo.findByEmail(email);
        if (usuario == null) {
            throw new IllegalArgumentException("Email no encontrado");
        }

        // buscamos el espacio
        Espacio espacio = espacioRepo.findById(idEspacio)
                .orElseThrow(() -> new IllegalArgumentException("Espacio no encontrado"));

        // validamos si el espacio esta disponible, tomando parametros: espacio
        // seleccionado, fecha_hora entrada y fecha-hora-salida
        // tienen que cumplirse las 3 condiciones
        boolean ocupado = reservaRepo.existsByEspacioAndFechaInicioBeforeAndFechaFinAfter(
                espacio, fechaFin, fechaInicio);

        // devolvemos mensaje en caso de que ya este reservado
        if (ocupado) {
            throw new IllegalArgumentException("El espacio ya está ocupado en esas fechas y hora");
        }

        // creamos y devolvemos respuesta
        Reserva reserva = new Reserva();
        reserva.setUsuario(usuario);
        reserva.setEspacio(espacio);
        reserva.setFechaInicio(fechaInicio);
        reserva.setFechaFin(fechaFin);
        reserva.setEstado("pendiente");

        reserva = reservaRepo.save(reserva);

        // Crear el pago asociado
        Pago pago = new Pago();
        pago.setReserva(reserva);
        pago.setMonto(monto);
        pago.setMetodo(metodoPago);
        pago.setEstado(estadoPago);
        // Guardar el pago
        pagoRepo.save(pago);

        return reserva;
    }

    public void actualizarReserva(Long idReserva, LocalDateTime fechaInicio, LocalDateTime fechaFin, String estado) {

        // buscamos por el id de reserva si existe
        Reserva reserva = reservaRepo.findById(idReserva)
                .orElseThrow(() -> new IllegalArgumentException("La reserva no existe."));

        // validamos si esta disponible para la nuevas fechas
        boolean espacioOcupado = reservaRepo.existsByEspacioAndFechaInicioBetweenAndFechaFinBetweenAndIdNot(
                reserva.getEspacio(),
                fechaInicio,
                fechaFin,
                reserva.getId());

        // en caso de que ya este ocupado (siempre se excluye la actual)
        if (espacioOcupado) {
            throw new IllegalArgumentException("El espacio está ocupado en las fechas indicadas.");
        }

        // actualizamos con la informacion nueva
        reserva.setFechaInicio(fechaInicio);
        reserva.setFechaFin(fechaFin);
        reserva.setEstado(estado);

        // guardamos la informacion
        reservaRepo.save(reserva);
    }
}
