
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-editar-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-editar-reserva.component.html',
  styleUrl: './form-editar-reserva.component.css'
})
export class FormEditarReservaComponent {
  // recibimos que lo enviamos
  @Input() reservaId: number = 0;
  @Input() espacioId: number = 0;
  @Input() espacioNombre: string = '';
  @Input() fechaInicioOriginal: string = '';
  @Input() fechaFinOriginal: string = '';


  @Output() cerrarModal = new EventEmitter<void>();
  @Output() reservaActualizada = new EventEmitter<any>();
  @Output() scrollChange = new EventEmitter<boolean>();



  fechaInicio: string = '';
  fechaFin: string = '';
  horaInicio: string = '';
  horaFin: string = '';
  accionReserva: string = 'no-cancelar';


  cerrar() {
    this.cerrarModal.emit();

    // cuando presione el boton de cerrar actualizacion el valor de la variable
    this.scrollChange.emit(false);
  }


  ngOnInit() {
    // cuando se habre el formulario hacemos que se desabilite el formulario
    this.scrollChange.emit(true);


    // Inicializar fechas y horas
    if (this.fechaInicioOriginal) {
      const inicio = new Date(this.fechaInicioOriginal);
      this.fechaInicio = this.formatearFecha(inicio);
      this.horaInicio = this.formatearHora(inicio);
    }

    if (this.fechaFinOriginal) {
      const fin = new Date(this.fechaFinOriginal);
      this.fechaFin = this.formatearFecha(fin);
      this.horaFin = this.formatearHora(fin);
    }
  }

  // formateamos la fecha (YYYY-MM-DD)
  formatearFecha(fecha: Date): string {
    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const dia = String(fecha.getDate()).padStart(2, '0');
    return `${año}-${mes}-${dia}`;
  }

  //formateamos la hora a formato (HH:mm)
  formatearHora(fecha: Date): string {
    const horas = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    return `${horas}:${minutos}`;
  }


  reservar() {
    if (this.accionReserva === 'cancelar') {
      this.cancelarReserva();
    } else {
      this.actualizarReserva();
    }
  }

  cancelarReserva() {
    this.reservaActualizada.emit({
      accion: 'cancelar',
      reservaId: this.reservaId,
      espacioId: this.espacioId
    });

    this.cerrar();
  }


  convertirHora12h(hora24: string): string {
    const [horas, minutos] = hora24.split(':').map(Number);
    const horas12 = horas % 12 || 12;
    return `${horas12}:${minutos.toString().padStart(2, '0')}`;
  }

  actualizarReserva() {
    const datosActualizados = {
      accion: 'actualizar',
      reservaId: this.reservaId,
      espacioId: this.espacioId,
      fechaInicio: this.fechaInicio,
      fechaFin: this.fechaFin,
      horaEntrada: this.convertirHora12h(this.horaInicio),
      horaSalida: this.convertirHora12h(this.horaFin)
    };

    this.reservaActualizada.emit(datosActualizados);

    this.cerrar();

  }
}