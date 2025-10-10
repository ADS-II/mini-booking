package com.example.coworking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.coworking.model.Ubicacion;

public interface UbicacionRepository extends JpaRepository<Ubicacion, Integer> {
        Ubicacion findByZona(String zona);
}