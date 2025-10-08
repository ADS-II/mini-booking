package com.example.coworking.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.coworking.model.Servicio;
import com.example.coworking.model.TipoEspacio;
import com.example.coworking.service.ComponenteSistemaService;

@RestController
@RequestMapping("/api/componente")
@CrossOrigin(origins = {
    "http://localhost:4200",
    "https://mini-booking.netlify.app"
})
public class ComponenteController {
    // http://localhost:8080/swagger-ui/index.html

    private final ComponenteSistemaService service;

    public ComponenteController(ComponenteSistemaService service) {
        this.service = service;
    }

    // listamos todos los tipos de espacios existentes
    @GetMapping("/tipos-espacio")
    public List<TipoEspacio> listarTiposEspacio() {
        return service.listarTiposEspacio();
    }

    // listamos todos los servicios existentes
    @GetMapping("/servicios")
    public List<Servicio> listarServicios() {
        return service.listarServicios();
    }

}
