package com.example.coworking.service;
import java.util.List;
import org.springframework.stereotype.Service;

import com.example.coworking.model.Servicio;
import com.example.coworking.model.TipoEspacio;
import com.example.coworking.model.Ubicacion;
import com.example.coworking.repository.ServicioRepository;
import com.example.coworking.repository.TipoEspacioRepository;
import com.example.coworking.repository.UbicacionRepository;

@Service
public class ComponenteSistemaService {
    private final TipoEspacioRepository tipoEspacioRepo;
    private final ServicioRepository servicioRepo;
    private final UbicacionRepository ubicacionRepository;

    public ComponenteSistemaService(TipoEspacioRepository tipoEspacioRepo, ServicioRepository servicioRepo,UbicacionRepository ubicacionRepository) {
        this.tipoEspacioRepo = tipoEspacioRepo;
        this.servicioRepo = servicioRepo;
        this.ubicacionRepository = ubicacionRepository;
    }

    public List<TipoEspacio> listarTiposEspacio() {
        return tipoEspacioRepo.findAll();
    }

    public List<Servicio> listarServicios() {
        return servicioRepo.findAll();
    }
    public List<Ubicacion> listarUbicaciones() {
        return ubicacionRepository.findAll();
    }

}
