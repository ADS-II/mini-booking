import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormReservaComponent } from '../form-reserva/form-reserva.component';
import { FiltrosEspacioComponent, FiltrosEspacio } from '../filtros-espacio/filtros-espacio.component';

interface Servicio {
  id: number;
  nombre: string;
  descripcion?: string;
}

interface Espacio {
  id: number;
  nombre: string;
  tipo: string;
  capacidad: number;
  precio: number;
  estado: string;
  servicios: Servicio[];
  imagen?: string;
}

@Component({
  selector: 'app-espacios',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormReservaComponent, FiltrosEspacioComponent],
  templateUrl: './espacios.component.html',
  styleUrls: ['./espacios.component.css']
})
export class EspaciosComponent implements OnInit {

  espacios_list: Espacio[] = [];
  espacios_list_filtrados: Espacio[] = [];
  mostrarFormId: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarEspacios();
  }

  /**
   * Carga los espacios desde el backend
   */
  cargarEspacios(): void {
    this.http.get<Espacio[]>('http://localhost:8080/api/espacio')
      .subscribe({
        next: (data) => {
          this.espacios_list = data;
          this.espacios_list_filtrados = [...data];
          console.log('Espacios cargados:', data);
        },
        error: (error) => {
          console.error('Error al cargar espacios:', error);
          // Puedes mostrar un mensaje al usuario aquí
        }
      });
  }

  /**
   * Toggle del formulario de reserva
   */
  toggleForm(espacioId: number): void {
    if (this.mostrarFormId === espacioId) {
      this.mostrarFormId = null;
    } else {
      this.mostrarFormId = espacioId;
    }
  }

  /**
   * Obtiene el nombre del espacio por ID
   */
  getEspacioNombre(id: number): string {
    const espacio = this.espacios_list_filtrados.find(e => e.id === id);
    return espacio ? espacio.nombre : '';
  }

  /**
   * Obtiene el precio del espacio por ID
   */
  getEspacioPrecio(id: number): number {
    const espacio = this.espacios_list_filtrados.find(e => e.id === id);
    return espacio ? espacio.precio : 50;
  }

  /**
   * Aplica los filtros a la lista de espacios
   */
  filtrarEspacios(filtros: FiltrosEspacio): void {
    console.log('Aplicando filtros:', filtros);

    this.espacios_list_filtrados = this.espacios_list.filter(espacio => {
      // Filtro por tipo
      if (filtros.tipo && espacio.tipo !== filtros.tipo) {
        return false;
      }

      // Filtro por capacidad mínima
      if (filtros.capacidadMinima && espacio.capacidad < filtros.capacidadMinima) {
        return false;
      }

      // Filtro por precio mínimo
      if (filtros.precioMinimo && espacio.precio < filtros.precioMinimo) {
        return false;
      }

      // Filtro por precio máximo
      if (filtros.precioMaximo && espacio.precio > filtros.precioMaximo) {
        return false;
      }

      // Filtros de servicios - DINÁMICO
      if (filtros.servicios && filtros.servicios.length > 0) {
        // El espacio debe tener TODOS los servicios seleccionados
        for (const servicioRequerido of filtros.servicios) {
          if (!this.tieneServicio(espacio, servicioRequerido)) {
            return false;
          }
        }
      }

      return true;
    });

    console.log('Espacios filtrados:', this.espacios_list_filtrados.length);
  }

  /**
   * Verifica si un espacio tiene un servicio específico
   */
  private tieneServicio(espacio: Espacio, nombreServicio: string): boolean {
    return espacio.servicios.some(
      servicio => servicio.nombre.toLowerCase().includes(nombreServicio.toLowerCase())
    );
  }
}