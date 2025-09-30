import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface FiltrosEspacio {
  tipo: string;
  capacidadMinima: number | null;
  precioMinimo: number | null;
  precioMaximo: number | null;
  wifi: boolean;
  aireAcondicionado: boolean;
  cafes: boolean;
  proyector: boolean;
  pizarra: boolean;
}

@Component({
  selector: 'app-filtros-espacio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filtros-espacio.component.html',
  styleUrls: ['./filtros-espacio.component.css']
})
export class FiltrosEspacioComponent {

  @Output() filtrosAplicados = new EventEmitter<FiltrosEspacio>();
  @Input() totalResultados?: number;

  // Estado de filtros móviles
  mostrarFiltros = false;

  // Filtros actuales
  filtros: FiltrosEspacio = {
    tipo: '',
    capacidadMinima: null,
    precioMinimo: null,
    precioMaximo: null,
    wifi: false,
    aireAcondicionado: false,
    cafes: false,
    proyector: false,
    pizarra: false
  };

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

    console.log('Filtros aplicados:', this.filtros);
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
      wifi: false,
      aireAcondicionado: false,
      cafes: false,
      proyector: false,
      pizarra: false
    };

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
      this.filtros.wifi ||
      this.filtros.aireAcondicionado ||
      this.filtros.cafes ||
      this.filtros.proyector ||
      this.filtros.pizarra
    );
  }

  /**
   * Maneja cambios en tiempo real para algunos filtros
   */
  onFiltroChange() {
    // Aplicar automáticamente en desktop para mejor UX
    if (window.innerWidth >= 1024) {
      // Pequeño delay para evitar demasiadas llamadas
      setTimeout(() => {
        this.aplicarFiltros();
      }, 300);
    }
  }
}