package com.example.coworking.dto;

import java.time.LocalDateTime;

public class ReservasUsuarioDTO {

    private Integer reservaId;
    private String nombreUsuario;
    private String emailUsuario;
    private String nombreEspacio;
    private String tipoEspacio;
    private String zona;
    private String direccion;
    private LocalDateTime fechaInicio;
    private LocalDateTime fechaFin;
    private String estadoReserva;
    private Double monto;

    private String estadoEspacio;
    private boolean isEditable = true;


    public ReservasUsuarioDTO(Integer reservaId, String nombreUsuario, String emailUsuario,
            String nombreEspacio, String tipoEspacio, String zona,
            String direccion, LocalDateTime fechaInicio, LocalDateTime fechaFin,
            String estadoReserva, String estadoEspacio, Double monto) {
        this.reservaId = reservaId;
        this.nombreUsuario = nombreUsuario;
        this.emailUsuario = emailUsuario;
        this.nombreEspacio = nombreEspacio;
        this.tipoEspacio = tipoEspacio;
        this.zona = zona;
        this.direccion = direccion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.estadoReserva = estadoReserva;
        this.estadoEspacio = estadoEspacio;
        this.monto = monto;
    }


    

    public Integer getReservaId() {
        return reservaId;
    }

    public void setReservaId(Integer reservaId) {
        this.reservaId = reservaId;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getEmailUsuario() {
        return emailUsuario;
    }

    public void setEmailUsuario(String emailUsuario) {
        this.emailUsuario = emailUsuario;
    }

    public String getNombreEspacio() {
        return nombreEspacio;
    }

    public void setNombreEspacio(String nombreEspacio) {
        this.nombreEspacio = nombreEspacio;
    }

    public String getTipoEspacio() {
        return tipoEspacio;
    }

    public void setTipoEspacio(String tipoEspacio) {
        this.tipoEspacio = tipoEspacio;
    }

    public String getZona() {
        return zona;
    }

    public void setZona(String zona) {
        this.zona = zona;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
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

    public String getEstadoReserva() {
        return estadoReserva;
    }

    public void setEstadoReserva(String estadoReserva) {
        this.estadoReserva = estadoReserva;
    }

    public Double getMonto() {
        return monto;
    }

    public void setMonto(Double monto) {
        this.monto = monto;
    }

    public boolean isEditable() {
        return isEditable;
    }

    public void setEditable(boolean isEditable) {
        this.isEditable = isEditable;
    }

    public String getEstadoEspacio() {
        return estadoEspacio;
    }

    public void setEstadoEspacio(String estadoEspacio) {
        this.estadoEspacio = estadoEspacio;
    }

}
