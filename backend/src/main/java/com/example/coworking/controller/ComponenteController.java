package com.example.coworking.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.*;

import com.example.coworking.dto.EspacioDTO;
import com.example.coworking.dto.ReservaDTO;
import com.example.coworking.dto.ReservasUsuarioDTO;
import com.example.coworking.model.Servicio;
import com.example.coworking.model.TipoEspacio;
import com.example.coworking.model.Ubicacion;
import com.example.coworking.service.ComponenteSistemaService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping("/api/componente")
public class ComponenteController {
    // http://localhost:8080/swagger-ui/index.html

    private final ComponenteSistemaService service;

    public ComponenteController(ComponenteSistemaService service) {
        this.service = service;
    }

    /**
     * Listar todas las reservas filtradas por usuario.
     * 
     * @return Lista de objetos ReservaDTO
     */
    @Operation(summary = "Listar reservas", description = "Obtiene todas las reservas registradas del usuario en el sistema")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Lista de reservas obtenida correctamente")
    })
    @PostMapping("reservas/usuario")
    public List<ReservasUsuarioDTO> listarReservasUsuario(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        return service.listarReservasUsuario(email);
    }

    /**
     * Listar todas las reservas existentes.
     * 
     * @return Lista de objetos ReservaDTO
     */
    @Operation(summary = "Listar reservas", description = "Obtiene todas las reservas registradas en el sistema")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Lista de reservas obtenida correctamente")
    })
    @GetMapping("reservas/verificar")
    public List<ReservaDTO> listarReservas() {
        return service.listarReservas();
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

    // listamos todos los servicios existentes
    @GetMapping("/ubicaciones")
    public List<Ubicacion> listarUbicaciones() {
        return service.listarUbicaciones();
    }

    /**
     * Listar todos los espacios registrados.
     * 
     * @return Lista de objetos Espacio
     */
    @Operation(summary = "Listar espacios", description = "Obtiene todos los espacios registrados en el sistema")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Lista de espacios obtenida correctamente")
    })
    @GetMapping("espacios")
    public List<EspacioDTO> listar() {
        return service.listar();
    }

}
