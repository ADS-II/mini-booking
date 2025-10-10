package com.example.coworking.repository;

import com.example.coworking.model.EstadoPago;
import com.example.coworking.model.EstadoReserva;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EstadoPagoRepository extends JpaRepository<EstadoPago, Integer> {
    EstadoPago findByNombre(String nombre);
}