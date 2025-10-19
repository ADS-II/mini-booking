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
    // Recuperamos la data de auth
    this.auth.user$.subscribe((user) => {
      if (user) {
        this.email = user.email;
        this.getReservarUsser();
      } else {
        // ´posbible caso que solo haya iniciado en el login
        const usuarioLocal = JSON.parse(localStorage.getItem('usserAutenticado') || '{}');
        if (usuarioLocal) {
          this.email = usuarioLocal.email;
          this.getReservarUsser();
        }
      }
    });
  }

  // buscamos las reservas del usuario
  getReservarUsser(): void {
    // validamos si el email que se recupero es valido
    if (!this.email) {
      this.notificationService.error('No te has registrado aun');
      return;
    }

    // extraemos el token jwt
    this.auth.getAccessTokenSilently().subscribe({
      next: (token) => {
        console.log(token);
        // preparamos el formto de json que recibe el backend
        const data = { email: this.email };
        // hacemos peticion al backend con el tocken que recuperamos
        this.http.post(`${environment.apiUrl}/api/componente/reservas/usuario`, data, {
          // agregamos el encabezado
          headers: { Authorization: `Bearer ${token}` }
        })
          .subscribe({
            next: (reservas: any[]) => {
              // obtenemos las respuestas 
              this.reservas_usuario = reservas;
              // en dado caso que no se obtenga ninguna reserva registrada el usuario que se autentico mostramos un mensaje
              if (reservas.length == 0) {
                this.notificationService.error('Actualmente no tienes reservas registradas');
              }
            },
            error: (err) => {
              // en caso que se pase un erro con la peticion del backed mostramos alerta
              console.error(err);
              this.notificationService.error('Error al cargar tus reservas');
            }
          });
      },
      error: (err) => {
        // en caso de que tengamos un error al obtener el tocken
        console.error(err);
        this.notificationService.error('No se pudo autenticar la sesión, error en el token');
      }
    });
  }
  formatearFecha(fecha: string): string {
    return fecha.replace('T', ' ');
  }



  filtrarRerserva(reservaId: number): void {
    //  buscamos en la lista que hemos cargado
    const reserva = this.reservas_usuario.find(r => r.reservaId === reservaId);

    // validamos si se encontro la reserva
    if (reserva) {
      this.selectedReserva = reserva;
    } else {
      this.notificationService.error('No se encontro tu reserva seleccionada');
    }
  }
  /**
   * 
   * @param event recibe un objeto
   */
  handleReservaActualizada(event: any) {
    // extraemos el token jwt
    this.auth.getAccessTokenSilently().subscribe({
      next: (token) => {
        // validamos si la accion que se intenta procesar es actualizar como horas o fechas
        if (event.accion === 'actualizar') {
          this.http.put(`${environment.apiUrl}/api/reserva/actualizar/tiempo`, event, {
            // agregamos el encabezado
            headers: { Authorization: `Bearer ${token}` }
          })
            .subscribe({
              next: (response: any) => {
                // mostramos mensaje que nos devolvio el backend
                this.notificationService.success(response.message, 'Reserva actualizada');

                // actualizamos la interfaz sin recargar la pagina
                this.getReservarUsser()
              },
              error: (err) => {
                // mostramos error que nos devolvio el backend
                this.notificationService.error(err.error.error || 'Hubo un error al actualizar la reserva.');
              }
            });

        } else if (event.accion === 'cancelar') { // validamos si solo se quiere cancelar
          // solo habilitamos el espacio y cambiamos estado de la reserva
          const body = {
            reservaId: event.reservaId,
            espacioId: event.espacioId
          };
          this.http.put(`${environment.apiUrl}/api/reserva/actualizar/cancelar`, body, {
            // agregamos el encabezado
            headers: { Authorization: `Bearer ${token}` }
          })
            .subscribe({
              next: (response: any) => {
                // mostramos mensaje que nos devolvio el backend
                this.notificationService.success(response.message, 'Reserva actualizada');
                // actualizamos la interfaz sin recargar la pagina
                this.getReservarUsser()
              },
              error: (err) => {
                // mostramos error que nos devolvio el backend
                this.notificationService.error(err.error.error || 'Hubo un error al actualizar la reserva.');
              }
            });
        }
      },
      error: (err) => {
        // en caso de que tengamos un error al obtener el tocken
        console.error(err);
        this.notificationService.error('No se pudo autenticar la sesión, error en el token');
      }
    });
  }
}
