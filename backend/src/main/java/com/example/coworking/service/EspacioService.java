package com.example.coworking.service;

import java.util.List;
import org.springframework.stereotype.Service;

import com.example.coworking.dto.EspacioDTO;
import com.example.coworking.dto.ServicioDTO;
import com.example.coworking.model.Espacio;
import com.example.coworking.model.Servicio;
import com.example.coworking.model.Ubicacion;
import com.example.coworking.repository.EspacioRepository;

@Service
public class EspacioService {
    private final EspacioRepository repository;

    public EspacioService(EspacioRepository repository) {
        this.repository = repository;
    }

    public Espacio guardar(Espacio espacio) {
        return repository.save(espacio);
    }

    public Espacio obtener(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public void eliminar(Integer id) {
        repository.deleteById(id);
    }

}
