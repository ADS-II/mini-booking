package com.example.coworking.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import com.example.coworking.model.MetodoPago;


public interface MetodoPagoRepository extends JpaRepository<MetodoPago, Integer> {
      MetodoPago findByNombre(String nombre);
}