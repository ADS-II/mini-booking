package com.example.coworking.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.example.coworking.model.Espacio;
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

    public List<Espacio> listar() {
        return repository.findAll();
    }



    public Espacio obtener(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}
