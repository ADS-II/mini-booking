package com.example.coworking.service;
import java.util.List;
import org.springframework.stereotype.Service;

import com.example.coworking.model.Servicio;
import com.example.coworking.model.TipoEspacio;
import com.example.coworking.repository.ServicioRepository;
import com.example.coworking.repository.TipoEspacioRepository;

@Service
public class ComponenteSistemaService {
    private final TipoEspacioRepository tipoEspacioRepo;
    private final ServicioRepository servicioRepo;

    public ComponenteSistemaService(TipoEspacioRepository tipoEspacioRepo, ServicioRepository servicioRepo) {
        this.tipoEspacioRepo = tipoEspacioRepo;
        this.servicioRepo = servicioRepo;
    }

    public List<TipoEspacio> listarTiposEspacio() {
        return tipoEspacioRepo.findAll();
    }

    public List<Servicio> listarServicios() {
        return servicioRepo.findAll();
    }

}
