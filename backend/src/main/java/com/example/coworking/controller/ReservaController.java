package com.example.coworking.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.coworking.dto.ReservaDTO;
import com.example.coworking.service.ReservaService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping("/api/reserva")
@Tag(name = "Reservas", description = "Operaciones para gestionar reservas de espacios")
public class ReservaController {

    private final ReservaService service;

    public ReservaController(ReservaService service) {
        this.service = service;
    }

    // Métodos privados para validar y formatear fechas
    private void validarRangoFechasHora(LocalDateTime horaEntrada, LocalDateTime horaSalida) {
        if (horaSalida.isBefore(horaEntrada)) {
            throw new IllegalArgumentException("La hora o fecha de salida no puede ser menor que la hora de entrada.");
        }
    }

    private LocalDateTime[] formatearFecha(Map<String, String> body) {

        String fechaInicio = body.get("fechaInicio") + "T00:00:00";
        String fechaFin = body.get("fechaFin") + "T00:00:00";
        String horaEntradaString = body.get("horaEntrada");
        String horaSalidaString = body.get("horaSalida");

        LocalDateTime inicio = LocalDateTime.parse(fechaInicio, DateTimeFormatter.ISO_DATE_TIME);
        LocalDateTime fin = LocalDateTime.parse(fechaFin, DateTimeFormatter.ISO_DATE_TIME);

        LocalDateTime horaEntrada = LocalDateTime.parse(inicio.toLocalDate() + "T" + horaEntradaString + ":00");
        LocalDateTime horaSalida = LocalDateTime.parse(fin.toLocalDate() + "T" + horaSalidaString + ":00");

        return new LocalDateTime[] { horaEntrada, horaSalida };
    }

    /**
     * Crear una nueva reserva.
     * JSON esperado:
     * {
     * "idEspacio": "1",
     * "email": "usuario@demo.com",
     * "nombre": "nombre usuario",
     * "fechaInicio": "2026-02-24",
     * "fechaFin": "2026-02-24",
     * "horaEntrada": "09:27",
     * "horaSalida": "09:28",
     * "estadoPago": "completado",
     * "metodoPago": "efectivo",
     * "monto": 25000
     * }
     */
    @Operation(summary = "Crear reserva", description = "Registra una nueva reserva para un espacio con los datos proporcionados")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Reserva creada correctamente"),
            @ApiResponse(responseCode = "400", description = "Datos inválidos o conflictivos")
    })
    @PostMapping("crear")
    public ResponseEntity<?> crearReserva(@RequestBody Map<String, String> body) {
        try {
            Integer idEspacio = Integer.parseInt(body.get("idEspacio"));
            String email = body.get("email");
            String nombre = body.get("nombre");

            LocalDateTime[] fechaHoras = formatearFecha(body);
            LocalDateTime fechaHoraEntrada = fechaHoras[0];
            LocalDateTime fechaHoraSalida = fechaHoras[1];

            validarRangoFechasHora(fechaHoraEntrada, fechaHoraSalida);

            String estadoPago = body.get("estadoPago");
            String metodoPago = body.get("metodoPago");
            Double monto = Double.parseDouble(body.get("monto"));

            // Llamamos al servicio y devolvemos directamente su ResponseEntity
            return service.crearReserva(idEspacio, email, nombre,
                    fechaHoraEntrada, fechaHoraSalida, estadoPago,
                    metodoPago, monto);

        } catch (IllegalArgumentException ex) {
            return ResponseEntity.badRequest().body(Map.of("error", ex.getMessage()));
        }
    }

    /**
     * Actualizar una reserva existente.
     * JSON esperado:
     * {
     * "idReserva": "23",
     * "fechaInicio": "2025-09-24",
     * "fechaFin": "2025-09-24",
     * "horaEntrada": "09:27",
     * "horaSalida": "18:25",
     * "estado": "confirmada"
     * }
     */
    @Operation(summary = "Actualizar reserva", description = "Actualiza los datos de una reserva existente")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Reserva actualizada correctamente"),
            @ApiResponse(responseCode = "400", description = "Datos inválidos o conflictivos"),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor")
    })
    private LocalDateTime[] formatearFecha_up(Map<String, String> body) {
        LocalDate fechaInicio = LocalDate.parse(body.get("fechaInicio"));
        LocalDate fechaFin = LocalDate.parse(body.get("fechaFin"));
        LocalTime horaEntrada = LocalTime.parse(body.get("horaEntrada"), DateTimeFormatter.ofPattern("H:mm"));
        LocalTime horaSalida = LocalTime.parse(body.get("horaSalida"), DateTimeFormatter.ofPattern("H:mm"));

        return new LocalDateTime[] {
                LocalDateTime.of(fechaInicio, horaEntrada),
                LocalDateTime.of(fechaFin, horaSalida)
        };
    }

    @PutMapping("actualizar/tiempo")
    public ResponseEntity<?> actualizarReserva(@RequestBody Map<String, String> body) {
        try {
            Integer idReserva = Integer.parseInt(body.get("reservaId"));

            LocalDateTime[] fechaHoras = formatearFecha_up(body);
            LocalDateTime fechaHoraEntrada = fechaHoras[0];
            LocalDateTime fechaHoraSalida = fechaHoras[1];

            validarRangoFechasHora(fechaHoraEntrada, fechaHoraSalida);

            service.actualizarReserva(idReserva, fechaHoraEntrada, fechaHoraSalida);
            return ResponseEntity.ok(Map.of("message", "Reserva actualizada correctamente"));
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.badRequest().body(Map.of("error", ex.getMessage()));
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(Map.of("error", "Error interno del servidor"));
        }
    }

    @PutMapping("actualizar/cancelar")
    public ResponseEntity<?> actualizarReservaCancelar(@RequestBody Map<String, String> body) {
        try {
            // aqui solo actualizamos 2 cosas pasamos el espacio a disponible
            // y la reserva a cancelada
            Integer idReserva = Integer.parseInt(body.get("reservaId"));
            Integer idEspacio = Integer.parseInt(body.get("espacioId"));


            service.actualizarReservaCancelar(idReserva, idEspacio);
            return ResponseEntity.ok(Map.of("message", "Reserva cancelada correctamente"));
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.badRequest().body(Map.of("error", ex.getMessage()));
        } catch (Exception ex) {
            return ResponseEntity.status(500).body(Map.of("error", "Error interno del servidor"));
        }
    }
}
