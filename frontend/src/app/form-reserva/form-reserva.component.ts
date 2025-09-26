import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './form-reserva.component.html',
  styleUrls: ['./form-reserva.component.css']
})
export class FormReservaComponent {

  // id del espacio que se recibe del cual fue seleccionado reservar
  @Input() espacioId!: number;

  email = 'usuario1@demo.com'; // lo recogeremos de localstorage
  estadoPago = 'completado';
  metodoPago = 'procesando angular';
  monto = 25000;

  fechaInicio!: string;
  fechaFin!: string;
  horaInicio!: string;
  horaFin!: string;

  constructor(private http: HttpClient) { }

  reservar() {
    // damos la estructura que solicita el backend
    const reservaData = {
      idEspacio: this.espacioId.toString(),
      email: this.email,
      fechaInicio: this.fechaInicio,
      fechaFin: this.fechaFin,
      horaEntrada: this.horaInicio,
      horaSalida: this.horaFin,
      estadoPago: this.estadoPago,
      metodoPago: this.metodoPago,
      monto: this.monto
    };

    // podemos cargar un loaders

    // hacemos peticion al api
    this.http.post('http://localhost:8080/api/reserva', reservaData)
      .subscribe({
        next: (response) => {
          console.log('Reserva exitosa:', response);
          alert(`Reserva procesada ${this.espacioId}!`);

          // reseteamos el formulario
          this.fechaInicio = '';
          this.fechaFin = '';
          this.horaInicio = '';
          this.horaFin = '';
        },
        error: (err) => {

          // capturamos posibles errores
          console.error('Error al enviar la reserva:', err);
          const mensajeError = err.error?.error || 'Ocurrió un error desconocido';
          alert(`Error al realizar la reserva: ${mensajeError}`);
        }
      });
  }

}
