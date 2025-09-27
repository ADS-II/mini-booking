package com.example.coworking.service;

import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.coworking.model.Espacio;
import com.example.coworking.repository.EspacioRepository;
import com.example.coworking.repository.ServicioRepository;

@Service
public class EspacioService {
    private final EspacioRepository repository;
    private final ServicioRepository servicioRepository;

    public EspacioService(EspacioRepository repository, ServicioRepository servicioRepository) {
        this.repository = repository;
        this.servicioRepository = servicioRepository;
    }

    public Espacio guardar(Espacio espacio) {
        return repository.save(espacio);
    }

    public List<Espacio> listar() {
        return repository.findAll();
    }

    public Espacio obtener(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void eliminar(Long id) {
        repository.deleteById(id);
    }

    // funcione de complementos de los filtros
    public List<String> obtenerTiposUnicos() {
        return repository.findDistinctTipos();
    }

    public List<String> obtenerNombresServiciosUnicos() {
        return servicioRepository.findDistinctNombres();
    }
}
