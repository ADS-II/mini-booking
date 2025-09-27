import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtros-espacio',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './filtros-espacio.component.html',
  styleUrls: ['./filtros-espacio.component.css']
})
export class FiltrosEspacioComponent {

  @Output() filtrosAplicados = new EventEmitter<any>();

  tipo_espacios: any[] = [];
  servicios: any[] = [];

  filtroSeleccionado = {
    tipo: '',
    capacidad: null,
    precio_max: null,
    precio_min: null,
    servicios: [] as string[]
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getFiltros();
    this.getFiltrosServicio();
  }

  getFiltros() {
    this.http.get<any[]>('http://localhost:8080/api/espacio/tipos')
      .subscribe({
        next: (data) => {
          this.tipo_espacios = data;
          console.log(data);
        },
        error: err => console.error('Error al obtener filtros:', err)
      });
  }

  getFiltrosServicio() {
    this.http.get<any[]>('http://localhost:8080/api/espacio/servicios')
      .subscribe({
        next: (data) => {
          this.servicios = data
          console.log(data);
        },
        error: err => console.error('Error al obtener servicios:', err)
      });
  }

  toggleServicio(valor: string, checked: boolean) {
    if (checked) {
      this.filtroSeleccionado.servicios.push(valor);
    } else {
      this.filtroSeleccionado.servicios = this.filtroSeleccionado.servicios.filter(v => v !== valor);
    }
  }

  aplicarFiltros() {
    this.filtrosAplicados.emit(this.filtroSeleccionado);
  }
}
