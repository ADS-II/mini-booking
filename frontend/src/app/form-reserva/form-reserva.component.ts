

import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { FormLoginComponent } from "../form-login/form-login.component"; // 👈 Importar Auth0


@Component({
  selector: 'app-form-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, FormLoginComponent],
  templateUrl: './form-reserva.component.html',
  styleUrls: ['./form-reserva.component.css']
})
export class FormReservaComponent {
  mostrarLogin: boolean = false;

  @Input() espacioId!: number;
  @Input() espacioNombre?: string;
  @Input() espacioPrecio?: number;
  @Output() cerrarForm = new EventEmitter<void>();

  // Datos del usuario autenticado
  email: string | null = null;
  nombre: string | null = null;
  picture: string | null = null;

  estadoPago = 'completado';
  metodoPago = 'Efectivo';

  // Datos del formulario
  fechaInicio!: string;
  fechaFin!: string;
  horaInicio!: string;
  horaFin!: string;

  constructor(private http: HttpClient, private auth: AuthService) {
    const today = new Date();
    this.fechaInicio = today.toISOString().split('T')[0];
    this.fechaFin = today.toISOString().split('T')[0];

    // Hora por defecto
    const currentHour = today.getHours();
    this.horaInicio = `${currentHour.toString().padStart(2, '0')}:00`;
    this.horaFin = `${(currentHour + 1).toString().padStart(2, '0')}:00`;


    this.auth.user$.subscribe((user) => {
      if (user) {
        this.email = user.email ?? null;
        this.nombre = user.name ?? null;
        this.picture = user.picture ?? null;
        this.mostrarLogin = false;
      } else {
        this.mostrarLogin = true;
      }
    });

  }


  /**
   * Calcula la duración entre fechas y horas
   */
  calcularDuracion(): string {
    if (!this.fechaInicio || !this.fechaFin || !this.horaInicio || !this.horaFin) {
      return '---';
    }

    try {
      const inicio = new Date(`${this.fechaInicio}T${this.horaInicio}`);
      const fin = new Date(`${this.fechaFin}T${this.horaFin}`);

      const diffMs = fin.getTime() - inicio.getTime();
      const diffHours = Math.round(diffMs / (1000 * 60 * 60));

      if (diffHours <= 0) {
        return 'Horario inválido';
      }

      if (diffHours < 24) {
        return diffHours === 1 ? '1 hora' : `${diffHours} horas`;
      } else {
        const dias = Math.floor(diffHours / 24);
        const horasRestantes = diffHours % 24;
        let resultado = dias === 1 ? '1 día' : `${dias} días`;
        if (horasRestantes > 0) {
          resultado += horasRestantes === 1 ? ' y 1 hora' : ` y ${horasRestantes} horas`;
        }
        return resultado;
      }
    } catch (error) {
      return 'Error en cálculo';
    }
  }

  /**
   * Calcula el total basado en la duración y precio por hora
   */
  calcularTotal(): string {
    if (!this.fechaInicio || !this.fechaFin || !this.horaInicio || !this.horaFin) {
      return '0';
    }

    try {
      const inicio = new Date(`${this.fechaInicio}T${this.horaInicio}`);
      const fin = new Date(`${this.fechaFin}T${this.horaFin}`);

      const diffMs = fin.getTime() - inicio.getTime();
      const diffHours = Math.ceil(diffMs / (1000 * 60 * 60));

      if (diffHours <= 0) {
        return '0';
      }

      const precioPorHora = this.espacioPrecio || 50;
      const total = diffHours * precioPorHora;

      return total.toLocaleString();
    } catch (error) {
      return '0';
    }
  }

  /**
   * Valida que las fechas y horas sean correctas
   */
  validarFechasHoras(): boolean {
    if (!this.fechaInicio || !this.fechaFin || !this.horaInicio || !this.horaFin) {
      return false;
    }

    try {
      const inicio = new Date(`${this.fechaInicio}T${this.horaInicio}`);
      const fin = new Date(`${this.fechaFin}T${this.horaFin}`);
      const ahora = new Date();

      // No puede ser en el pasado (con 5 minutos de tolerancia)
      const tolerancia = new Date(ahora.getTime() - 5 * 60 * 1000);
      if (inicio < tolerancia) {
        return false;
      }

      // Fecha fin debe ser mayor a fecha inicio
      if (fin <= inicio) {
        return false;
      }

      // No más de 30 días en el futuro
      const maxFuturo = new Date(ahora.getTime() + 30 * 24 * 60 * 60 * 1000);
      if (fin > maxFuturo) {
        return false;
      }

      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Procesa la reserva
   */
  reservar() {
    // Validaciones finales
    if (!this.validarFechasHoras()) {
      alert('Por favor, verifica que las fechas y horas sean correctas.\n\n' +
        '• La reserva no puede ser en el pasado\n' +
        '• La fecha de fin debe ser posterior a la de inicio\n' +
        '• Máximo 30 días en el futuro');
      return;
    }

    // Calcular monto dinámico
    const montoCalculado = parseInt(this.calcularTotal().replace(/,/g, ''));

    const reservaData = {
      idEspacio: this.espacioId.toString(),
      email: this.email,
      nombre: this.nombre,
      fechaInicio: this.fechaInicio,
      fechaFin: this.fechaFin,
      horaEntrada: this.horaInicio,
      horaSalida: this.horaFin,
      estadoPago: this.estadoPago,
      metodoPago: this.metodoPago,
      monto: montoCalculado
    };

      this.http.post('http://localhost:8080/api/reserva', reservaData)
        .subscribe({
          next: (response) => {
            alert(response['body']?.message || 'Tu Reserva ha sido agendada.');
            this.resetForm();
            this.cerrarForm.emit();
          },
          error: (err) => {
            alert(err.error?.message || err.message || 'Error desconocido.');
          }
        });
    }
 

    /**
     * Resetea el formulario a valores por defecto
     */
    resetForm() {
      const today = new Date();
      this.fechaInicio = today.toISOString().split('T')[0];
      this.fechaFin = today.toISOString().split('T')[0];

      const currentHour = today.getHours();
      this.horaInicio = `${currentHour.toString().padStart(2, '0')}:00`;
      this.horaFin = `${(currentHour + 1).toString().padStart(2, '0')}:00`;
    }

    /**
     * Cierra el modal
     */
    cerrar() {
      this.resetForm();
      this.cerrarForm.emit();
    }
  }

