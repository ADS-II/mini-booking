package com.example.coworking.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.coworking.model.Usuario;
import com.example.coworking.service.UsuarioService;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Map;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = {
        "http://localhost:4200",
        "https://worknest-71nj.onrender.com"
})
public class UsuarioController {
    private final UsuarioService service;

    public UsuarioController(UsuarioService service) {
        this.service = service;
    }

    @Operation(summary = "Lista todos los usuarios", description = "Obtiene la lista completa de usuarios registrados")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Lista de usuarios obtenida correctamente", content = @Content(mediaType = "application/json", schema = @Schema(implementation = Usuario.class)))
    })
    @GetMapping
    public List<Usuario> listar() {
        return service.listar();
    }

    @Operation(summary = "Crea un nuevo usuario", description = "Registra un usuario nuevo si el email no está duplicado")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Usuario creado correctamente", content = @Content(mediaType = "application/json", schema = @Schema(implementation = Usuario.class))),
            @ApiResponse(responseCode = "400", description = "El email ya está registrado", content = @Content(mediaType = "application/json"))
    })
    @PostMapping
    public ResponseEntity<?> crear(@Valid @RequestBody Usuario usuario) {
        Usuario encontrado = service.buscarPorEmail(usuario.getEmail());
        if (encontrado != null) {
            return ResponseEntity.badRequest().body(
                    Map.of("error", "El email ya está registrado"));
        }

        Usuario data = service.guardar(usuario);
        return ResponseEntity.ok(data);
    }

    @Operation(summary = "Obtiene un usuario por ID", description = "Busca un usuario por su identificador único")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Usuario encontrado", content = @Content(mediaType = "application/json", schema = @Schema(implementation = Usuario.class))),
            @ApiResponse(responseCode = "404", description = "Usuario no encontrado", content = @Content)
    })
    @GetMapping("/{id}")
    public Usuario obtener(@PathVariable Integer id) {
        return service.obtener(id);
    }

    @Operation(summary = "Elimina un usuario por ID", description = "Elimina un usuario existente de la base de datos")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Usuario eliminado correctamente"),
            @ApiResponse(responseCode = "404", description = "Usuario no encontrado")
    })
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        service.eliminar(id);
    }
}
