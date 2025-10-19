package com.example.coworking.controller;

import org.springframework.security.oauth2.jwt.Jwt;

// clase solo para mostrar informacion por consola
public class ComplementoPrints {
    public void imprimirToken(Jwt jwt) {
        // El token completo
        String token = jwt.getTokenValue();
        System.out.println("Token cliente: " + token);
    }
}
