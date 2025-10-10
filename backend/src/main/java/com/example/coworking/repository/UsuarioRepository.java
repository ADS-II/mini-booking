package com.example.coworking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.coworking.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    Usuario findByEmail(String email);
}