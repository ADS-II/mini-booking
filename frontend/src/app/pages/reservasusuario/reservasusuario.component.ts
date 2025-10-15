import { CommonModule } from '@angular/common';  // Importa CommonModule
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { FormEditarReservaComponent } from "src/app/form-editar-reserva/form-editar-reserva.component";
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-reservasusuario',
  standalone: true,
  imports: [CommonModule, FooterComponent, FormEditarReservaComponent],
  templateUrl: './reservasusuario.component.html',
  styleUrls: ['./reservasusuario.component.css']
})
export class ReservasusuarioComponent {
  reservas_usuario = [];
  email: string | null = null;
  selectedReserva = null

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private notificationService: NotificationService
  ) {
    const usuarioLocal = JSON.parse(localStorage.getItem('usserAutenticado') || '{}');
    if (usuarioLocal) {
      this.email = usuarioLocal.email;
      this.getReservarUsser();
    } else {

      // Recuperamos la data de auth
      this.auth.user$.subscribe((user) => {
        if (user) {
          this.email = user.email;
          this.getReservarUsser();
        }
      });
    }
  }

  // buscamos las reservas del usuario
  getReservarUsser(): void {
    if (this.email) {
      const data = { email: this.email };
      this.http.post(`${environment.apiUrl}/api/componente/reservas/usuario`, data)
        .subscribe({
          next: (reservas: any[]) => {
            this.reservas_usuario = reservas;
            if (reservas.length == 0) {
              this.notificationService.error('Actualmente no tienes reservas registradas');
            }
          },
          error: (err) => {
            this.notificationService.error('Error al cargar tus reservas');
          }
        });
    } else {
      this.notificationService.error('No te has registrado aun');
    }
  }
  formatearFecha(fecha: string): string {
    return fecha.replace('T', ' ');
  }



  filtrarRerserva(reservaId: number): void {
    //  buscamos en la lista que hemos cargado
    const reserva = this.reservas_usuario.find(r => r.reservaId === reservaId);

    if (reserva) {
      this.selectedReserva = reserva;
    } else {
      this.notificationService.error('No se encontro tu reserva seleccionada');
    }
  }
  handleReservaActualizada(event: any) {
    if (event.accion === 'actualizar') {
      this.http.put(`${environment.apiUrl}/api/reserva/actualizar/tiempo`, event)
        .subscribe({
          next: (response: any) => {
            this.notificationService.success(response.message, 'Reserva actualizada');

            this.getReservarUsser()
          },
          error: (err) => {
            this.notificationService.error(err.error.error || 'Hubo un error al actualizar la reserva.');

          }
        });

    } else if (event.accion === 'cancelar') {
      // solo habilitamos el espacio y cambiamos estado de la reserva
      const body = {
        reservaId: event.reservaId,
        espacioId: event.espacioId
      };
      this.http.put(`${environment.apiUrl}/api/reserva/actualizar/cancelar`, body)
        .subscribe({
          next: (response: any) => {
            this.notificationService.success(response.message, 'Reserva actualizada');
            this.getReservarUsser()
          },
          error: (err) => {
            this.notificationService.error(err.error.error || 'Hubo un error al actualizar la reserva.');
          }
        });
    }
  }

}
