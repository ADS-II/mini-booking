import { Component, Input, EventEmitter, Output } from '@angular/core';
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

  @Input() espacioId!: number;
  @Output() cerrarForm = new EventEmitter<void>();

  email = 'usuario1@demo.com';
  estadoPago = 'completado';
  metodoPago = 'procesando angular';
  monto = 25000;

  fechaInicio!: string;
  fechaFin!: string;
  horaInicio!: string;
  horaFin!: string;

  constructor(private http: HttpClient) { }

  reservar() {
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

    this.http.post('http://localhost:8080/api/reserva', reservaData)
      .subscribe({
        next: (response) => {
          console.log('Reserva exitosa:', response);
          alert(`Reserva procesada ${this.espacioId}!`);
          this.resetForm();
        },
        error: (err) => {
          console.error('Error al enviar la reserva:', err);
          const mensajeError = err.error?.error || 'Ocurrió un error desconocido';
          alert(`Error al realizar la reserva: ${mensajeError}`);
        }
      });
  }

  resetForm() {
    this.fechaInicio = '';
    this.fechaFin = '';
    this.horaInicio = '';
    this.horaFin = '';
  }

  cerrar() {
    this.resetForm();
    this.cerrarForm.emit(); 
  }
}
