import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HomeContentComponent } from './../../components/home-content/home-content.component';
import { HeroComponent } from './../../components/hero/hero.component';
import { LoadingComponent } from './../../components/loading/loading.component';
import { AsyncPipe, NgIf, NgClass, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "src/app/components/footer/footer.component";


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormReservaComponent } from 'src/app/form-reserva/form-reserva.component';
import { FormLoginComponent } from "src/app/form-login/form-login.component";
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    HomeContentComponent,
    HeroComponent,
    LoadingComponent,
    AsyncPipe,
    NgIf,
    RouterLink,
    FooterComponent,
    HttpClientModule,
    FormReservaComponent,
    NgClass,
    NgForOf,
    FormLoginComponent
  ]
})
export class HomeComponent {
  constructor(public auth: AuthService, private http: HttpClient) { }
  espacios_list: Espacio[] = [];
  mostrarLogin: boolean = false;

  ngOnInit(): void {
    this.cargarEspacios();
  }

  mostrarFormId: number | null = null;

  cargarEspacios(): void {
    this.http.get<Espacio[]>('http://localhost:8080/api/espacio')
      .subscribe({
        next: (data) => {
          this.espacios_list = data;

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
    const usserAutenticado = localStorage.getItem('usserAutenticado');

    if (!usserAutenticado) {
      this.mostrarLogin = true;
      return;
    }

    if (this.mostrarFormId === espacioId) {
      this.mostrarFormId = null;
    } else {
      this.mostrarFormId = espacioId;
    }
  }

  hideLoginForm() {
    this.mostrarFormId = null; // método para que el hijo pueda ocultar el login
  }

  /**
  * Obtiene el nombre del espacio por ID
  */
  getEspacioNombre(id: number): string {
    const espacio = this.espacios_list.find(e => e.id === id);
    return espacio ? espacio.nombre : '';
  }

  /**
   * Obtiene el precio del espacio por ID
   */
  getEspacioPrecio(id: number): number {
    const espacio = this.espacios_list.find(e => e.id === id);
    return espacio ? espacio.precio : 50;
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
