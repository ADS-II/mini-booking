package com.example.coworking.dto;

import java.time.LocalDateTime;

public class ReservaDTO {
    private Long idReserva;
    private String nombreUsuario;
    private String nombreEspacio;
    private LocalDateTime fechaInicio;
    private LocalDateTime fechaFin;
    private String estadoPago;
    private Double monto;
    private String email;

    // Constructor
    public ReservaDTO(Long idReserva, String nombreUsuario, String email, String nombreEspacio,
            LocalDateTime fechaInicio, LocalDateTime fechaFin,
            String estadoPago, Double monto) {
        this.idReserva = idReserva;
        this.nombreUsuario = nombreUsuario;
        this.nombreEspacio = nombreEspacio;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.estadoPago = estadoPago;
        this.monto = monto;
        this.email = email;
    }

    public Long getIdReserva() {
        return idReserva;
    }

    public void setIdReserva(Long idReserva) {
        this.idReserva = idReserva;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getNombreEspacio() {
        return nombreEspacio;
    }

    public void setNombreEspacio(String nombreEspacio) {
        this.nombreEspacio = nombreEspacio;
    }

    public LocalDateTime getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(LocalDateTime fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public LocalDateTime getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(LocalDateTime fechaFin) {
        this.fechaFin = fechaFin;
    }

    public String getEstadoPago() {
        return estadoPago;
    }

    public void setEstadoPago(String estadoPago) {
        this.estadoPago = estadoPago;
    }

    public Double getMonto() {
        return monto;
    }

    public void setMonto(Double monto) {
        this.monto = monto;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
