import { CommonModule, DOCUMENT } from '@angular/common';  // Importa CommonModule
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
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
    private notificationService: NotificationService,
    @Inject(DOCUMENT) private doc: Document
  ) {
    // Recuperamos la data de auth
    this.auth.user$.subscribe((user) => {
      if (user) {
        this.email = user.email;
        this.getReservarUsser();
      }
    });
  }

  /**
   * llamamos a la funcion de analisis
   * @param  
   */
  private analisisGrafica() {
    // fecha inicio y final
    const result = this.calculoEstadisticas('05-01-2025', '23-12-2025')
    console.log(result);
  }

  





  // metodo que se encarga de habilitar y desactivar el scroll al body
  public actualizarScroll(habilitarScroll: boolean): void {
    console.log(habilitarScroll);
    if (habilitarScroll) {
      this.doc.body.classList.add('no-scroll');
    } else {
      this.doc.body.classList.remove('no-scroll');
    }
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
        // preparamos el formto de json que recibe el backend
        const data = { email: this.email };
        // hacemos peticion al backend con el tocken que recuperamos
        this.http.post(`${environment.apiUrl}/api/componente/reservas/usuario`, data, {
          headers: { Authorization: `Bearer ${token}` }
        })
          .subscribe({
            next: (reservas: any[]) => {
              // obtenemos las respuestas 
              this.reservas_usuario = reservas;

              this.analisisGrafica()
              // en dado caso que no se obtenga ninguna reserva registrada el usuario que se autentico mostramos un mensaje
              if (reservas.length == 0) {
                this.notificationService.error('Actualmente no tienes reservas registradas');
              }
            },
            error: (err) => {
              // en caso que se pase un erro con la peticion del backed mostramos alerta
              console.error(err);
              console.log(err.error);
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


  /**
   * 
   * @param event recibe un objeto
   */
  handleReservaActualizada(event: any) {
    // cuando presionen en boton de enviar, tenga exito o no habilitamos el scroll
    this.actualizarScroll(false)
    // extraemos el token jwt
    this.auth.getAccessTokenSilently().subscribe({
      next: (token) => {
        // validamos si la accion que se intenta procesar es actualizar como horas o fechas
        if (event.accion === 'actualizar') {
          this.http.put(`${environment.apiUrl}/api/reserva/actualizar/tiempo`, event, {
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

  private calculoEstadisticas(fecha_inicio_input, fecha_fin_input) {
    // en caso que dejen alguna fecha vacia mandamos una alerta
    if (!fecha_inicio_input || !fecha_fin_input) {
      this.notificationService.error('Fecha de incio o final vacio')
      return;
    }
    const reservas = this.reservas_usuario;

    // hacemos la conversion a formato d-m-y
    const parseDateToUTC = (dateStr: string): Date => {
      const [day, month, year] = dateStr.split('-');
      return new Date(Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day)));
    };

    const fecha_filtro_inicio = parseDateToUTC(fecha_inicio_input);
    const fecha_filtro_fin = parseDateToUTC(fecha_fin_input);

    // filtramos
    const reservas_filtradas = reservas.filter(reserva => {

      const inicio_reserva = new Date(reserva.fechaInicio);
      const fin_reserva = new Date(reserva.fechaFin);

      const inicio_reserva_date_only = new Date(Date.UTC(inicio_reserva.getFullYear(), inicio_reserva.getMonth(), inicio_reserva.getDate()));
      const fin_reserva_date_only = new Date(Date.UTC(fin_reserva.getFullYear(), fin_reserva.getMonth(), fin_reserva.getDate()));

      //  validamos que las fechas esten dentro del rango que escribieron
      const fin_reserva_es_despues_del_inicio_filtro = fin_reserva_date_only.getTime() >= fecha_filtro_inicio.getTime();
      const inicio_reserva_es_antes_del_fin_filtro = inicio_reserva_date_only.getTime() <= fecha_filtro_fin.getTime();

      return fin_reserva_es_despues_del_inicio_filtro && inicio_reserva_es_antes_del_fin_filtro;
    });

    // creamos una lista de los meses para darle mas visualidad al momento de graficar
    const meses_es = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];


    const agrupadoPorMes: { [mes: string]: { reservas_mes: number; dinero: number } } = {};

    reservas_filtradas.forEach(reserva => {
      const fecha = new Date(reserva.fechaInicio);
      const mesNombre = meses_es[fecha.getMonth()];

      if (!agrupadoPorMes[mesNombre]) {
        agrupadoPorMes[mesNombre] = {
          reservas_mes: 0,
          dinero: 0
        };
      }

      agrupadoPorMes[mesNombre].reservas_mes += 1;
      agrupadoPorMes[mesNombre].dinero += Number(reserva.monto);
    });

    // preparamos el objeto que le mandaremos a la grafica
    const dataGrafica = Object.keys(agrupadoPorMes).map(mes => ({
      mes,
      reservas_mes: agrupadoPorMes[mes].reservas_mes,
      dinero: agrupadoPorMes[mes].dinero,
      label: mes + ' - reservas ' + agrupadoPorMes[mes].reservas_mes,
      valor: agrupadoPorMes[mes].dinero
    }));

    return dataGrafica
  }
}
