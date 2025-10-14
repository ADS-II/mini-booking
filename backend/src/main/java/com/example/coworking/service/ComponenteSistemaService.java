package com.example.coworking.service;

import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.coworking.dto.EspacioDTO;
import com.example.coworking.dto.ReservaDTO;
import com.example.coworking.dto.ServicioDTO;
import com.example.coworking.model.Espacio;
import com.example.coworking.model.Servicio;
import com.example.coworking.model.TipoEspacio;
import com.example.coworking.model.Ubicacion;
import com.example.coworking.repository.EspacioRepository;
import com.example.coworking.repository.ReservaRepository;
import com.example.coworking.repository.ServicioRepository;
import com.example.coworking.repository.TipoEspacioRepository;
import com.example.coworking.repository.UbicacionRepository;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@Service
public class ComponenteSistemaService {
    private final TipoEspacioRepository tipoEspacioRepo;
    private final ServicioRepository servicioRepo;
    private final UbicacionRepository ubicacionRepository;
    private final EspacioRepository espacioRepository;
    private final ReservaRepository reservaRepo;

    public ComponenteSistemaService(TipoEspacioRepository tipoEspacioRepo, ServicioRepository servicioRepo,
            UbicacionRepository ubicacionRepository, EspacioRepository espacioRepository,
            ReservaRepository reservaRepo) {
        this.tipoEspacioRepo = tipoEspacioRepo;
        this.servicioRepo = servicioRepo;
        this.ubicacionRepository = ubicacionRepository;
        this.espacioRepository = espacioRepository;
        this.reservaRepo = reservaRepo;
    }

    public List<ReservaDTO> listarReservas() {
        return reservaRepo.findAllWithDetails();
    }

    public List<EspacioDTO> listar() {
        List<Espacio> espacios = espacioRepository.findAll();
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

            // obtengo los datos de la ubicacion
            Ubicacion ubicacion = e.getTipo().getUbicacion();
            dto.setDireccion(ubicacion.getDireccion());
            dto.setZona(ubicacion.getZona());
            dto.setHorario(ubicacion.getHorario());

            // Recorro la tabla intermedia espacioServicios
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
