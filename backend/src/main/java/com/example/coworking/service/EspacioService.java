package com.example.coworking.service;

import java.util.List;
import org.springframework.stereotype.Service;

import com.example.coworking.dto.EspacioDTO;
import com.example.coworking.dto.ServicioDTO;
import com.example.coworking.model.Espacio;
import com.example.coworking.model.Servicio;
import com.example.coworking.repository.EspacioRepository;

@Service
public class EspacioService {
    private final EspacioRepository repository;


    public EspacioService(EspacioRepository repository) {
        this.repository = repository;
        
    }

    public List<EspacioDTO> listar() {
        List<Espacio> espacios = repository.findAll();
        return espacios.stream().map(e -> {
            EspacioDTO dto = new EspacioDTO();
            dto.setId(e.getId());
            dto.setNombre(e.getNombre());
            dto.setTipo(e.getTipo().getNombre());
            dto.setCapacidad(e.getCapacidad());
            dto.setPrecio(e.getPrecio());
            dto.setEstado(e.getEstado().getNombre());
            dto.setCreated(e.getCreated());
            dto.setUpdated(e.getUpdated());

            // Recorrer la tabla intermedia espacioServicios
            List<ServicioDTO> servicios = e.getEspacioServicios().stream().map(es -> {
                Servicio s = es.getServicio();
                ServicioDTO sdto = new ServicioDTO();
                sdto.setId(s.getId());
                sdto.setNombre(s.getNombre());
                sdto.setDescripcion(s.getDescripcion());
                return sdto;
            }).toList();

            dto.setServicios(servicios);
            return dto;
        }).toList();
    }

    public Espacio guardar(Espacio espacio) {
        return repository.save(espacio);
    }

    public Espacio obtener(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void eliminar(Long id) {
        repository.deleteById(id);
    }

}
