import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { FormLoginComponent } from "../form-login/form-login.component";
import { environment } from 'src/environments/environment';
import { NotificationService } from '../services/notification.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ReservaExistente {
  idReserva: number;
  nombreEspacio: string;
  fechaInicio: string;
  fechaFin: string;
}

@Component({
  selector: 'app-form-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, FormLoginComponent,],
  templateUrl: './form-reserva.component.html',
  styleUrls: ['./form-reserva.component.css']
})
export class FormReservaComponent implements OnInit {
  mostrarLogin: boolean = false;
  validandoDisponibilidad: boolean = false;

  @Input() espacioId!: number;
  @Input() espacioNombre?: string;
  @Input() espacioPrecio?: number;
  @Output() cerrarForm = new EventEmitter<void>();
  @Output() reservaExitosa = new EventEmitter<boolean>();

  email: string | null = null;
  nombre: string | null = null;
  picture: string | null = null;

  estadoPago = 'Completado';
  metodoPago = 'Efectivo';

  fechaInicio!: string;
  fechaFin!: string;
  horaInicio!: string;
  horaFin!: string;

  fechaMinima: string;
  fechaMaxima: string;

  constructor(
    private http: HttpClient, 
    private auth: AuthService,
    private notificationService: NotificationService
  ) {
    const today = new Date();
    this.fechaInicio = today.toISOString().split('T')[0];
    this.fechaFin = today.toISOString().split('T')[0];

    const currentHour = today.getHours();
    this.horaInicio = `${currentHour.toString().padStart(2, '0')}:00`;
    this.horaFin = `${(currentHour + 1).toString().padStart(2, '0')}:00`;

    this.fechaMinima = today.toISOString().split('T')[0];
    const maxDate = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
    this.fechaMaxima = maxDate.toISOString().split('T')[0];

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

  ngOnInit(): void {
    this.cargarReservasEspacio();
  }

  cargarReservasEspacio(): void {
    this.http.get<ReservaExistente[]>(`${environment.apiUrl}/api/reserva`)
      .subscribe({
        next: (reservas) => {
          const reservasEspacio = reservas.filter(
            r => r.nombreEspacio === this.espacioNombre
          );
          console.log(`Reservas existentes para ${this.espacioNombre}:`, reservasEspacio);
        },
        error: (err) => {
          console.error('Error al cargar reservas:', err);
        }
      });
  }

  validarDisponibilidad(): Observable<{ disponible: boolean; conflicto?: ReservaExistente }> {
    return this.http.get<ReservaExistente[]>(`${environment.apiUrl}/api/reserva`).pipe(
      map(reservas => {
        const inicioNueva = new Date(`${this.fechaInicio}T${this.horaInicio}`);
        const finNueva = new Date(`${this.fechaFin}T${this.horaFin}`);

        const reservasEspacio = reservas.filter(
          r => r.nombreEspacio === this.espacioNombre
        );

        for (const reserva of reservasEspacio) {
          const inicioExistente = new Date(reserva.fechaInicio);
          const finExistente = new Date(reserva.fechaFin);

          if (inicioNueva < finExistente && finNueva > inicioExistente) {
            return { disponible: false, conflicto: reserva };
          }
        }

        return { disponible: true };
      })
    );
  }

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

  validarFechasHoras(): { valido: boolean; tipo?: string } {
    if (!this.fechaInicio || !this.fechaFin || !this.horaInicio || !this.horaFin) {
      return { valido: false };
    }

    try {
      const inicio = new Date(`${this.fechaInicio}T${this.horaInicio}`);
      const fin = new Date(`${this.fechaFin}T${this.horaFin}`);
      const ahora = new Date();

      const tolerancia = new Date(ahora.getTime() - 5 * 60 * 1000);
      if (inicio < tolerancia) {
        return { valido: false, tipo: 'pasado' };
      }

      if (fin <= inicio) {
        return { valido: false, tipo: 'invalido' };
      }

      const maxFuturo = new Date(ahora.getTime() + 30 * 24 * 60 * 60 * 1000);
      if (fin > maxFuturo) {
        return { valido: false, tipo: 'maximo' };
      }

      return { valido: true };
    } catch (error) {
      return { valido: false };
    }
  }

  formatearFecha(fecha: string): string {
    const date = new Date(fecha);
    return date.toLocaleDateString('es-ES', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  reservar() {
    if (!this.email) {
      this.notificationService.warning('Debes iniciar sesión para realizar una reserva', 'Autenticación Requerida');
      return;
    }

    const validacion = this.validarFechasHoras();
    if (!validacion.valido) {
      if (validacion.tipo) {
        this.notificationService.validacionFechas(validacion.tipo as any);
      } else {
        this.notificationService.warning('Por favor verifica las fechas y horas ingresadas', 'Datos Inválidos');
      }
      return;
    }

    this.validandoDisponibilidad = true;
    this.notificationService.info('Verificando disponibilidad...', 'Validando', 2000);

    this.validarDisponibilidad().subscribe({
      next: (resultado) => {
        if (!resultado.disponible && resultado.conflicto) {
          const fechaInicio = this.formatearFecha(resultado.conflicto.fechaInicio);
          const fechaFin = this.formatearFecha(resultado.conflicto.fechaFin);
          
          this.notificationService.espacioNoDisponible(
            this.espacioNombre || 'El espacio',
            fechaInicio,
            fechaFin
          );
          this.validandoDisponibilidad = false;
          return;
        }

        this.procesarReserva();
      },
      error: (err) => {
        console.error('Error al validar disponibilidad:', err);
        this.notificationService.errorServidor('No se pudo validar la disponibilidad del espacio');
        this.validandoDisponibilidad = false;
      }
    });
  }

  private procesarReserva(): void {
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

    this.http.post(`${environment.apiUrl}/api/reserva`, reservaData)
      .subscribe({
        next: (response: any) => {
          this.validandoDisponibilidad = false;
          
          this.notificationService.reservaExitosa(
            this.espacioNombre || 'Espacio',
            this.calcularDuracion(),
            this.calcularTotal()
          );

          this.resetForm();
          this.reservaExitosa.emit(true);
          this.cerrarForm.emit();
        },
        error: (err) => {
          this.validandoDisponibilidad = false;
          console.error('Error al crear reserva:', err);
          
          if (err.status === 400) {
            const mensaje = err.error?.error || 'Los datos de la reserva no son válidos';
            this.notificationService.error(mensaje, 'Error en la Reserva');
          } else if (err.status === 409) {
            this.notificationService.espacioNoDisponible(
              this.espacioNombre || 'El espacio',
              this.fechaInicio,
              this.fechaFin
            );
          } else if (err.status === 0) {
            this.notificationService.errorServidor('No se pudo conectar con el servidor');
          } else {
            this.notificationService.errorServidor(err.error?.message);
          }
        }
      });
  }

  resetForm() {
    const today = new Date();
    this.fechaInicio = today.toISOString().split('T')[0];
    this.fechaFin = today.toISOString().split('T')[0];

    const currentHour = today.getHours();
    this.horaInicio = `${currentHour.toString().padStart(2, '0')}:00`;
    this.horaFin = `${(currentHour + 1).toString().padStart(2, '0')}:00`;
  }

  cerrar() {
    this.resetForm();
    this.cerrarForm.emit();
  }
}