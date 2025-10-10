package com.example.coworking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.coworking.model.Estado;

public interface EstadoRepository extends JpaRepository<Estado, Integer> {
}