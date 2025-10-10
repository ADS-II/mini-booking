package com.example.coworking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.coworking.model.EstadoReserva;

public interface EstadoReservaRepository extends JpaRepository<EstadoReserva, Integer> {
    EstadoReserva findByNombre(String nombre);
}