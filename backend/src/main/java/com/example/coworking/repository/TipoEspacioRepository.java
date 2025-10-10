package com.example.coworking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.coworking.model.TipoEspacio;

public interface TipoEspacioRepository extends JpaRepository<TipoEspacio, Integer> {
}