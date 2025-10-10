package com.example.coworking.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tipos_espacio")
public class TipoEspacio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, unique = true)
    private String nombre;

    @ManyToOne
    @JoinColumn(name = "ubicacion_id", nullable = false)
    private Ubicacion ubicacion;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Ubicacion getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(Ubicacion ubicacion) {
        this.ubicacion = ubicacion;
    }

}
