package com.example.coworking.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.coworking.model.Servicio;

public interface ServicioRepository extends JpaRepository<Servicio, Long> {
    
    @Query("SELECT DISTINCT s.nombre FROM Servicio s")
    List<String> findDistinctNombres();
}