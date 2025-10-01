import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface FiltrosEspacio {
  tipo: string;
  capacidadMinima: number | null;
  precioMinimo: number | null;
  precioMaximo: number | null;
  servicios: string[]; // Cambio: ahora es un array de strings
}

@Component({
  selector: 'app-filtros-espacio',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './filtros-espacio.component.html',
  styleUrls: ['./filtros-espacio.component.css']
})
export class FiltrosEspacioComponent implements OnInit {

  @Output() filtrosAplicados = new EventEmitter<FiltrosEspacio>();
  @Input() totalResultados?: number;

  // Estado de filtros móviles
  mostrarFiltros = false;

  // Datos dinámicos desde el backend
  tiposDisponibles: string[] = [];
  serviciosDisponibles: string[] = [];

  // Filtros actuales
  filtros: FiltrosEspacio = {
    tipo: '',
    capacidadMinima: null,
    precioMinimo: null,
    precioMaximo: null,
    servicios: []
  };

  // Servicios seleccionados para checkboxes
  serviciosSeleccionados: Set<string> = new Set();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.cargarTiposDisponibles();
    this.cargarServiciosDisponibles();
  }

  /**
   * Carga los tipos de espacios disponibles desde el backend
   */
  cargarTiposDisponibles(): void {
    this.http.get<string[]>(`${environment.apiUrl}/api/componente/tipos-espacio`)
      .subscribe({
        next: (tipos) => {
          this.tiposDisponibles = tipos;
        },
        error: (error) => {
          console.error('Error al cargar tipos:', error);
        }
      });
  }

  /**
   * Carga los servicios disponibles desde el backend
   */
  cargarServiciosDisponibles(): void {
    this.http.get<string[]>(`${environment.apiUrl}/api/componente/servicios`)
      .subscribe({
        next: (servicios) => {
          this.serviciosDisponibles = servicios;
        },
        error: (error) => {
          console.error('Error al cargar servicios:', error);
        }
      });
  }

  /**
   * Toggle de servicio en el filtro
   */
  toggleServicio(servicio: string): void {
    if (this.serviciosSeleccionados.has(servicio)) {
      this.serviciosSeleccionados.delete(servicio);
    } else {
      this.serviciosSeleccionados.add(servicio);
    }

    // Actualizar array de filtros
    this.filtros.servicios = Array.from(this.serviciosSeleccionados);
  }

  /**
   * Verifica si un servicio está seleccionado
   */
  isServicioSeleccionado(servicio: string): boolean {
    return this.serviciosSeleccionados.has(servicio);
  }

  /**
   * Toggle filtros en móviles
   */
  toggleFiltros() {
    this.mostrarFiltros = !this.mostrarFiltros;
  }

  /**
   * Aplica los filtros actuales
   */
  aplicarFiltros() {
    // Validar rangos de precio
    if (this.filtros.precioMinimo && this.filtros.precioMaximo) {
      if (this.filtros.precioMinimo > this.filtros.precioMaximo) {
        alert('El precio mínimo no puede ser mayor al precio máximo');
        return;
      }
    }

    // Validar capacidad
    if (this.filtros.capacidadMinima && this.filtros.capacidadMinima < 1) {
      alert('La capacidad mínima debe ser al menos 1 persona');
      return;
    }

    // Emitir filtros
    this.filtrosAplicados.emit({ ...this.filtros });

    // Cerrar filtros en móviles
    if (window.innerWidth < 1024) {
      this.mostrarFiltros = false;
    }
  }

  /**
   * Limpia todos los filtros
   */
  limpiarFiltros() {
    this.filtros = {
      tipo: '',
      capacidadMinima: null,
      precioMinimo: null,
      precioMaximo: null,
      servicios: []
    };

    this.serviciosSeleccionados.clear();
    this.aplicarFiltros();
  }

  /**
   * Verifica si hay filtros activos
   */
  hayFiltrosActivos(): boolean {
    return !!(
      this.filtros.tipo ||
      this.filtros.capacidadMinima ||
      this.filtros.precioMinimo ||
      this.filtros.precioMaximo ||
      this.filtros.servicios.length > 0
    );
  }

  /**
   * Maneja cambios en tiempo real para algunos filtros
   */
  onFiltroChange() {
    // Aplicar automáticamente en desktop para mejor UX
    if (window.innerWidth >= 1024) {
      setTimeout(() => {
        this.aplicarFiltros();
      }, 300);
    }
  }
}