import { Component, Input, EventEmitter, Output, OnInit, Inject  } from '@angular/core';
import { CommonModule, DOCUMENT  } from '@angular/common';
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

interface ValidacionResult {
  valido: boolean;
  tipo?: 'pasado' | 'invalido' | 'maximo' | 'vacio';
  mensaje?: string;
}

@Component({
  selector: 'app-form-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, FormLoginComponent],
  templateUrl: './form-reserva.component.html',
  styleUrls: ['./form-reserva.component.css']
})
export class FormReservaComponent implements OnInit {


  mostrarLogin: boolean = false;
  mostrarEsteForm: boolean = false
  validandoDisponibilidad: boolean = false;
  @Input() espacioId!: number;
  @Input() espacioNombre?: string;
  @Input() espacioPrecio?: number;
  @Output() cerrarForm = new EventEmitter<void>();
  @Output() reservaExitosa = new EventEmitter<boolean>();

  // Datos del usuario autenticado
  email: string | null = null;
  nombre: string | null = null;
  picture: string | null = null;

  estadoPago = 'Completado';
  metodoPago = 'Efectivo';

  // Datos del formulario
  fechaInicio!: string;
  fechaFin!: string;
  horaInicio!: string;
  horaFin!: string;

  fechaMinima: string;
  fechaMaxima: string;

  // Estados de validación para feedback visual
  errores: {
    fechaInicio?: string;
    fechaFin?: string;
    horaInicio?: string;
    horaFin?: string;
    general?: string;
  } = {};

  // Para controlar si el usuario ha interactuado con los campos
  touched: {
    fechaInicio: boolean;
    fechaFin: boolean;
    horaInicio: boolean;
    horaFin: boolean;
  } = {
      fechaInicio: false,
      fechaFin: false,
      horaInicio: false,
      horaFin: false
    };

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private notificationService: NotificationService,
        @Inject(DOCUMENT) private doc: Document
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

    // recuperamos la data de auth
    this.auth.user$.subscribe((user) => {
      // si se ha logeado actualizamos la infoirmacion
      if (user) {

        // cargamos informacion de usuario
        this.establecerUsuario(user.email, user.name, user.picture);
        this.actualizarVista(false);
      } else {
        // en caso que solo se haya registrado sin usar auth
        const usuarioLocal = JSON.parse(localStorage.getItem('usserAutenticado'));
        // cargamos informacion de usuario
        if (usuarioLocal) {
          this.establecerUsuario(usuarioLocal.email, usuarioLocal.email);
          this.actualizarVista(false);
        } else {
          this.actualizarVista(true);
        }
      }
    });
  }
  // metodo que se encarga de actualizar la infromacion del usuario
  private establecerUsuario(email: string | null, nombre?: string | null, picture?: string | null): void {
    this.email = email ?? null;
    this.nombre = nombre ?? null;
    this.picture = picture ?? null;
  }

  // metodo que se encarga de mostrar/ocultar el login o formulario de reserva
  private actualizarVista(mostrarLogin: boolean): void {
    this.mostrarLogin = mostrarLogin;
    this.mostrarEsteForm = !mostrarLogin;
    this.actualizarScroll();
  }

  // metodo que se encarga de habilitar y desactivar el scroll al body
  private actualizarScroll(): void {
    if (this.mostrarEsteForm) {
      this.doc.body.classList.add('no-scroll');
    } else {
      this.doc.body.classList.remove('no-scroll');
    }
  }



  ngOnInit(): void {
    this.cargarReservasEspacio();
    this.validarFormularioCompleto();
  }

  /**
   * Marca un campo como tocado
   */
  marcarTocado(campo: 'fechaInicio' | 'fechaFin' | 'horaInicio' | 'horaFin'): void {
    this.touched[campo] = true;
    this.validarFormularioCompleto();
  }

  /**
   * Validación completa del formulario en tiempo real
   */
  validarFormularioCompleto(): void {
    this.errores = {};

    if (!this.fechaInicio || !this.fechaFin || !this.horaInicio || !this.horaFin) {
      return;
    }

    try {
      const inicio = new Date(`${this.fechaInicio}T${this.horaInicio}`);
      const fin = new Date(`${this.fechaFin}T${this.horaFin}`);
      const ahora = new Date();

      // Validar fecha de inicio no sea en el pasado
      const tolerancia = new Date(ahora.getTime() - 5 * 60 * 1000);
      if (inicio < tolerancia) {
        this.errores.fechaInicio = 'La fecha de inicio no puede ser en el pasado';
      }

      // Validar que fecha fin sea mayor a fecha inicio
      if (fin <= inicio) {
        this.errores.fechaFin = 'La fecha de fin debe ser posterior a la de inicio';
        this.errores.horaFin = 'La hora de fin debe ser posterior a la de inicio';
      }

      // Validar que no exceda 30 días
      const maxFuturo = new Date(ahora.getTime() + 30 * 24 * 60 * 60 * 1000);
      if (fin > maxFuturo) {
        this.errores.fechaFin = 'La reserva no puede exceder 30 días en el futuro';
      }

      // Validar duración mínima (al menos 1 hora)
      const diffMs = fin.getTime() - inicio.getTime();
      const diffHours = diffMs / (1000 * 60 * 60);
      if (diffHours < 1 && diffHours > 0) {
        this.errores.horaFin = 'La reserva debe ser de al menos 1 hora';
      }

    } catch (error) {
      this.errores.general = 'Error al validar las fechas y horas';
    }
  }

  /**
   * Obtiene el estado de un campo (valid, invalid, neutral)
   */
  getFieldStatus(campo: 'fechaInicio' | 'fechaFin' | 'horaInicio' | 'horaFin'): string {
    if (!this.touched[campo]) {
      return 'neutral';
    }

    if (this.errores[campo]) {
      return 'invalid';
    }

    return 'valid';
  }

  /**
   * Retorna si el formulario es válido
   */
  esFormularioValido(): boolean {
    return Object.keys(this.errores).length === 0 &&
      this.fechaInicio &&
      this.fechaFin &&
      this.horaInicio &&
      this.horaFin &&
      this.email !== null;
  }

  /**
   * Obtiene el mensaje de tooltip para el botón deshabilitado
   */
  getMensajeBotonDeshabilitado(): string {
    if (!this.email) {
      return 'Debes iniciar sesión para reservar';
    }

    if (!this.fechaInicio || !this.fechaFin || !this.horaInicio || !this.horaFin) {
      return 'Completa todos los campos del formulario';
    }

    if (this.errores.fechaInicio) {
      return this.errores.fechaInicio;
    }

    if (this.errores.fechaFin) {
      return this.errores.fechaFin;
    }

    if (this.errores.horaInicio || this.errores.horaFin) {
      return this.errores.horaFin || this.errores.horaInicio || '';
    }

    if (this.validandoDisponibilidad) {
      return 'Validando disponibilidad...';
    }

    return '';
  }

  cargarReservasEspacio(): void {
    this.http.get<ReservaExistente[]>(`${environment.apiUrl}/api/componente/reservas/verificar`)
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
    return this.http.get<ReservaExistente[]>(`${environment.apiUrl}/api/componente/reservas/verificar`).pipe(
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

  validarFechasHoras(): ValidacionResult {
    if (!this.fechaInicio || !this.fechaFin || !this.horaInicio || !this.horaFin) {
      return { valido: false, tipo: 'vacio' };
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

  /**
   * Limpia el formulario y resetea a valores por defecto
   */
  limpiarFormulario(): void {
    const confirmar = confirm('¿Estás seguro de que deseas limpiar el formulario?');

    if (confirmar) {
      this.resetForm();
      this.errores = {};
      this.touched = {
        fechaInicio: false,
        fechaFin: false,
        horaInicio: false,
        horaFin: false
      };
      this.notificationService.info('Formulario limpiado', 'Información', 2000);
    }
  }

  reservar() {
    // Marcar todos los campos como tocados
    this.touched = {
      fechaInicio: true,
      fechaFin: true,
      horaInicio: true,
      horaFin: true
    };

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

    this.http.post(`${environment.apiUrl}/api/reserva/crear`, reservaData)
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
          // actualizamos de nuevo el scroll
          this.actualizarVista(true)
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

    this.errores = {};
    this.touched = {
      fechaInicio: false,
      fechaFin: false,
      horaInicio: false,
      horaFin: false
    };
  }

  cerrar() {
    this.resetForm();
    this.cerrarForm.emit();
     // agregamos para que cuando se cierre el form de reserva se habilite nuevamente el scroll
    this.mostrarEsteForm = !this.mostrarEsteForm;
    this.actualizarScroll();
  }
}