import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormReservaComponent } from '../form-reserva/form-reserva.component';
import { FiltrosEspacioComponent } from "../filtros-espacio/filtros-espacio.component";

@Component({
  selector: 'app-espacios',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormReservaComponent, FiltrosEspacioComponent],
  templateUrl: './espacios.component.html',
  styleUrls: ['./espacios.component.css']
})
export class EspaciosComponent implements OnInit {

  images: string[] = [
    'src/assets/coworking-6173112_1280.jpg',
    'src/assets/small-office-4837892_1280.jpg',
    'https://aticco.com/wp-content/uploads/2024/07/que-es-coworking-1.jpg'
  ];

  espacios_list: any[] = []; // lista que obtenemos al inciciar la pagina
  espacios_list_filtrados: any[] = []; // lista que se muestra en la pagina despues de aplicar filtros
  mostrarFormId: number | null = null;  // mostrar el formulario de la reserva
  usserIsLogged: boolean = true;

  constructor(private http: HttpClient) {}

  // Al iniciar la pagina obtenemos todos los espacios
  ngOnInit(): void {
    this.getEspacios();
  }

  // hacemos peticion al api para obtener todos los espacios
  getEspacios() {
    this.http.get<any[]>('http://localhost:8080/api/espacio')
      .subscribe({
        next: (data) => {
          // inicializamos las dos listas con los datos obtenidos
          this.espacios_list = data;
          this.espacios_list_filtrados = data;
        },
        error: (err) => {
          console.error('Error al obtener espacios:', err);
        }
      });
  }

  // mostramos el formulario segun validacion
  toggleForm(espacioId: number) {
    if (!this.usserIsLogged) {
      alert('Debes iniciar sesión para reservar un espacio.');
      return;
    }
    this.mostrarFormId = this.mostrarFormId === espacioId ? null : espacioId;
  }

  // recibimos los filtros aplicados del formulario
  filtrarEspacios(filtros: any) {
    this.espacios_list_filtrados = this.espacios_list.filter(espacio => {
      // Tipo
      if (filtros.tipo && espacio.tipo !== filtros.tipo) return false;
      
      // Capacidad
      if (filtros.capacidad && espacio.capacidad < filtros.capacidad) return false;
      
      // Precio
      if (filtros.precio_min && espacio.precio < filtros.precio_min) return false;
      if (filtros.precio_max && espacio.precio > filtros.precio_max) return false;
      
      
      // Servicios
      if (filtros.servicios.length) {
        const serviciosEspacio = espacio.servicios.map((s: any) => s.nombre);
        if (!filtros.servicios.every((s: string) => serviciosEspacio.includes(s))) return false;
      }
      return true;
    });
  }
}
