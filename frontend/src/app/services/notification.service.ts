import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) {}

  success(message: string, title: string = 'Éxito', duration: number = 5000) {
    this.toastr.success(message, title, {
      timeOut: duration,
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-top-right'
    });
  }

  error(message: string, title: string = 'Error', duration: number = 6000) {
    this.toastr.error(message, title, {
      timeOut: duration,
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-top-right'
    });
  }

  warning(message: string, title: string = 'Advertencia', duration: number = 5000) {
    this.toastr.warning(message, title, {
      timeOut: duration,
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-top-right'
    });
  }

  info(message: string, title: string = 'Información', duration: number = 4000) {
    this.toastr.info(message, title, {
      timeOut: duration,
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-top-right'
    });
  }

  reservaExitosa(nombreEspacio: string, duracion: string, total: string) {
    const message = `${nombreEspacio} reservado por ${duracion}. Total: $${total}`;
    this.success(message, 'Reserva Confirmada', 7000);
  }

  espacioNoDisponible(nombreEspacio: string, fechaInicio: string, fechaFin: string) {
    const message = `${nombreEspacio} no está disponible. Ya existe una reserva desde ${fechaInicio} hasta ${fechaFin}`;
    this.warning(message, 'Espacio No Disponible', 8000);
  }

  validacionFechas(tipo: 'pasado' | 'invalido' | 'maximo') {
    const mensajes = {
      pasado: 'La fecha de inicio no puede ser en el pasado',
      invalido: 'La fecha de fin debe ser posterior a la fecha de inicio',
      maximo: 'La reserva no puede exceder 30 días en el futuro'
    };
    this.warning(mensajes[tipo], 'Fechas Inválidas');
  }

  errorServidor(mensaje?: string) {
    const mensajeDefault = 'Ocurrió un error en el servidor. Por favor intenta nuevamente.';
    this.error(mensaje || mensajeDefault, 'Error del Servidor', 7000);
  }

  autenticacionRequerida() {
    this.warning('Debes iniciar sesión para realizar una reserva', 'Autenticación Requerida');
  }

  validandoDisponibilidad() {
    this.info('Verificando disponibilidad del espacio...', 'Validando', 2000);
  }
}