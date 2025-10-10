package com.example.coworking.model;

import jakarta.persistence.*;

@Entity
@Table(name = "espacio_servicio")
public class EspacioServicio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    // relación con Espacio
    @ManyToOne
    @JoinColumn(name = "espacio_id", nullable = false)
    private Espacio espacio;

    // relación con Servicio
    @ManyToOne
    @JoinColumn(name = "servicio_id", nullable = false)
    private Servicio servicio;

    public Espacio getEspacio() {
        return espacio;
    }

    public void setEspacio(Espacio espacio) {
        this.espacio = espacio;
    }

    public Servicio getServicio() {
        return servicio;
    }

    public void setServicio(Servicio servicio) {
        this.servicio = servicio;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

}
