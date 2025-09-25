package com.example.coworking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.coworking.model.Espacio;

public interface EspacioRepository extends JpaRepository<Espacio, Long> {
}