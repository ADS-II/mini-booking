package com.example.coworking.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.coworking.dto.EspacioDTO;
import com.example.coworking.model.Espacio;
import com.example.coworking.service.EspacioService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

import io.swagger.v3.oas.annotations.media.ExampleObject;

@RestController
@RequestMapping("/api/espacio")
@CrossOrigin(origins = "http://localhost:4200")
@Tag(name = "Espacios", description = "Operaciones para gestionar los espacios disponibles")
public class EspacioController {

  private final EspacioService service;

  public EspacioController(EspacioService service) {
    this.service = service;
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
  @GetMapping
  public List<EspacioDTO> listar() {
    return service.listar();
  }

  /**
   * Crear un nuevo espacio junto con sus servicios.
   * 
   * @param espacio Objeto Espacio a registrar con su lista de servicios
   * @return Espacio creado con los servicios asociados
   */

  @Operation(summary = "Crear espacio con servicios", description = "Registra un nuevo espacio y sus servicios asociados")
  @ApiResponses({
      @ApiResponse(responseCode = "200", description = "Espacio y servicios creados correctamente")
  })
  @PostMapping
  public Espacio crear(
      @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "JSON con datos del espacio y sus servicios", required = true, content = @Content(schema = @Schema(implementation = Espacio.class), examples = @ExampleObject(value = """
                {
                  "capacidad": 25,
                  "estado": "disponible",
                  "nombre": "cap 26",
                  "precio": 60,
                  "tipo": "sala",
                  "servicios": [
                     {
                        "id": 1
                      },
                      {
                        "id": 2
                      },
                      {
                        "id": 3
                      }
                  ]
                }
                """))) @RequestBody Espacio espacio) {
    return service.guardar(espacio);
  }

  /**
   * Obtener un espacio por su ID.
   * 
   * @param id Identificador del espacio
   * @return Espacio correspondiente al ID
   */
  @Operation(summary = "Obtener espacio por ID", description = "Recupera la información de un espacio según su ID")
  @ApiResponses({
      @ApiResponse(responseCode = "200", description = "Espacio encontrado correctamente"),
      @ApiResponse(responseCode = "404", description = "Espacio no encontrado")
  })
  @GetMapping("/{id}")
  public Espacio obtener(@PathVariable Long id) {
    return service.obtener(id);
  }

  /**
   * Eliminar un espacio por su ID.
   * 
   * @param id Identificador del espacio
   */
  @Operation(summary = "Eliminar espacio", description = "Elimina un espacio registrado por su ID")
  @ApiResponses({
      @ApiResponse(responseCode = "200", description = "Espacio eliminado correctamente"),
      @ApiResponse(responseCode = "404", description = "Espacio no encontrado")
  })
  @DeleteMapping("/{id}")
  public void eliminar(@PathVariable Long id) {
    service.eliminar(id);
  }
}
