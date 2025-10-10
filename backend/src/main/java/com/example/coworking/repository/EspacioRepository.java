package com.example.coworking.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.coworking.model.Espacio;

public interface EspacioRepository extends JpaRepository<Espacio, Integer> {

    @Query("SELECT DISTINCT e.tipo FROM Espacio e")
    List<String> findDistinctTipos();
}