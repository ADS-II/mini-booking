package com.example.coworking.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
@Table(name = "servicios")
public class Servicio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String nombre;

    private String descripcion;

    // relación con la tabla intermedia que conecta con espacios
    @JsonIgnore // evitamos la serialización de la relación espacioServicios
    @OneToMany(mappedBy = "servicio", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<EspacioServicio> espacioServicios;


    public List<EspacioServicio> getEspacioServicios() {
        return espacioServicios;
    }

    public void setEspacioServicios(List<EspacioServicio> espacioServicios) {
        this.espacioServicios = espacioServicios;
    }



    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

   
}