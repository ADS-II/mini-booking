package com.example.coworking.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "espacios")
public class Espacio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private Integer capacidad;
    private Double precio;

    @Column(name = "created")
    private LocalDateTime created = LocalDateTime.now();

    @Column(name = "updated")
    private LocalDateTime updated = LocalDateTime.now();
    
    @ManyToOne
    @JoinColumn(name = "tipo_id", nullable = false)
    private TipoEspacio tipo;

    @ManyToOne
    @JoinColumn(name = "estado_id", nullable = false)
    private Estado estado;

    // relación con la tabla intermedia que conecta con servicios
    @OneToMany(mappedBy = "espacio", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<EspacioServicio> espacioServicios; 


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Integer getCapacidad() {
        return capacidad;
    }

    public void setCapacidad(Integer capacidad) {
        this.capacidad = capacidad;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public TipoEspacio getTipo() {
        return tipo;
    }

    public void setTipo(TipoEspacio tipo) {
        this.tipo = tipo;
    }

    public Estado getEstado() {
        return estado;
    }


    /**
     * disponible, ocupado, mantenimiento
     * @param estado
     */
    public void setEstado(Estado estado) {
        this.estado = estado;
    }

    public LocalDateTime getCreated() {
        return created;
    }

    public void setCreated(LocalDateTime created) {
        this.created = created;
    }

    public LocalDateTime getUpdated() {
        return updated;
    }

    public void setUpdated(LocalDateTime updated) {
        this.updated = updated;
    }

    public List<EspacioServicio> getEspacioServicios() {
        return espacioServicios;
    }

    public void setEspacioServicios(List<EspacioServicio> espacioServicios) {
        this.espacioServicios = espacioServicios;
    }
}