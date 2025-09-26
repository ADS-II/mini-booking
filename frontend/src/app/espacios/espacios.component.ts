import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormReservaComponent } from '../form-reserva/form-reserva.component'; // ajusta la ruta según tu proyecto

@Component({
  selector: 'app-espacios',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormReservaComponent],
  templateUrl: './espacios.component.html',
  styleUrls: ['./espacios.component.css']
})
export class EspaciosComponent implements OnInit {

  espacios_list: any[] = [];
  mostrarFormId: number | null = null;

  usserIsLogged: boolean = Math.random() < 0.5;  // Simulación del estado de autenticación

  constructor(private http: HttpClient) {
    console.log("simulador de autenticacion   " +  this.usserIsLogged);
  }

  ngOnInit(): void {
    this.getEspacios();
  }

  getEspacios() {
    this.http.get<any[]>('http://localhost:8080/api/espacio')
      .subscribe({
        next: (data) => {
          this.espacios_list = data;
        },
        error: (err) => {
          console.error('Error al obtener espacios:', err);
        }
      });
  }

  // Método para mostrar/ocultar el formulario de reserva ademas validamos si ya se logeo
  toggleForm(espacioId: number) {
    if (!this.usserIsLogged) {
      alert('Debes iniciar sesión para reservar un espacio.');
      return;
    }

    // si está logeado, alterna el formulario
    this.mostrarFormId = this.mostrarFormId === espacioId ? null : espacioId;
  }


}
