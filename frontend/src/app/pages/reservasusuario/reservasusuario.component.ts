
import { CommonModule, DOCUMENT } from '@angular/common';  // Importa CommonModule
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { FormEditarReservaComponent } from "src/app/form-editar-reserva/form-editar-reserva.component";
import { NotificationService } from 'src/app/services/notification.service';
import { FormsModule } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType, Chart, BarController, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

@Component({
  selector: 'app-reservasusuario',
  standalone: true,
  imports: [CommonModule, FooterComponent, FormEditarReservaComponent, FormsModule, BaseChartDirective],
  templateUrl: './reservasusuario.component.html',
  styleUrls: ['./reservasusuario.component.css']
})
export class ReservasusuarioComponent implements OnInit {
  reservas_usuario = [];
  email: string | null = null;
  selectedReserva = null;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#374151',
          font: {
            size: 12,
            weight: 'bold'
          },
          padding: 15
        }
      },
      tooltip: {
        backgroundColor: 'rgba(31, 41, 55, 0.9)',
        padding: 12,
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#6b7280',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#6b7280',
          font: {
            size: 11
          }
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(229, 231, 235, 0.5)'
        },
        ticks: {
          color: '#6b7280',
          font: {
            size: 11
          }
        }
      }
    }
  };
  public barChartLabels: string[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      { data: [], label: 'Reservas' },
      { data: [], label: 'Dinero ($)' }
    ]
  };

  meses: string[] = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];
  selectedMonth: string = '';

  // Opciones de filtro de rango
  filterType: 'mes' | 'rango' = 'mes';
  rangoOptions = [
    { value: '1', label: 'Último mes' },
    { value: '3', label: 'Últimos 3 meses' },
    { value: '6', label: 'Últimos 6 meses' },
    { value: '12', label: 'Año completo' },
    { value: 'custom', label: 'Personalizado' }
  ];
  selectedRango: string = '3';

  // Fechas personalizadas
  fechaInicio: string = '';
  fechaFin: string = '';

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private notificationService: NotificationService,
    @Inject(DOCUMENT) private doc: Document
  ) {
    // Register Chart.js components
    Chart.register(BarController, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
    // Recuperamos la data de auth
    this.auth.user$.subscribe((user) => {
      if (user) {
        this.email = user.email;
        this.getReservarUsser();
      }
    });
  }

  ngOnInit(): void {
    const currentMonthIndex = new Date().getMonth();
    this.selectedMonth = this.meses[currentMonthIndex];
  }

  onMonthChange(): void {
    this.analisisGrafica();
  }

  onFilterTypeChange(): void {
    this.analisisGrafica();
  }

  onRangoChange(): void {
    if (this.selectedRango !== 'custom') {
      this.analisisGrafica();
    }
  }

  onFechaCustomChange(): void {
    if (this.fechaInicio && this.fechaFin) {
      this.analisisGrafica();
    }
  }

  private analisisGrafica() {
    let startDate: string;
    let endDate: string;
    const today = new Date();
    const currentYear = today.getFullYear();

    if (this.filterType === 'mes') {
      // Filtro por mes individual
      const monthIndex = this.meses.indexOf(this.selectedMonth);
      startDate = `01-${String(monthIndex + 1).padStart(2, '0')}-${currentYear}`;
      const lastDay = new Date(currentYear, monthIndex + 1, 0);
      endDate = `${String(lastDay.getDate()).padStart(2, '0')}-${String(monthIndex + 1).padStart(2, '0')}-${currentYear}`;
    } else {
      // Filtro por rango de meses
      if (this.selectedRango === 'custom') {
        // Rango personalizado con date pickers
        if (!this.fechaInicio || !this.fechaFin) {
          return; // No hacer nada si no hay fechas
        }
        // Convertir de formato YYYY-MM-DD a DD-MM-YYYY
        const [yearI, monthI, dayI] = this.fechaInicio.split('-');
        const [yearF, monthF, dayF] = this.fechaFin.split('-');
        startDate = `${dayI}-${monthI}-${yearI}`;
        endDate = `${dayF}-${monthF}-${yearF}`;
      } else {
        // Rangos predefinidos
        const mesesAtras = parseInt(this.selectedRango);
        const fechaInicio = new Date(today);
        fechaInicio.setMonth(fechaInicio.getMonth() - mesesAtras);
        fechaInicio.setDate(1); // Primer día del mes

        startDate = `${String(fechaInicio.getDate()).padStart(2, '0')}-${String(fechaInicio.getMonth() + 1).padStart(2, '0')}-${fechaInicio.getFullYear()}`;
        endDate = `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getFullYear()}`;
      }
    }

    const result = this.calculoEstadisticas(startDate, endDate);
    this.updateChart(result);
  }

  private updateChart(data: any[]): void {
    this.barChartLabels = data.map(d => d.label);
    // Create new reference to trigger change detection in ng2-charts
    this.barChartData = {
      labels: this.barChartLabels,
      datasets: [
        {
          data: data.map(d => d.reservas_mes),
          label: 'Reservas',
          backgroundColor: 'rgba(37, 99, 235, 0.7)',
          borderColor: 'rgba(37, 99, 235, 1)',
          borderWidth: 2,
          hoverBackgroundColor: 'rgba(37, 99, 235, 0.9)',
          hoverBorderColor: 'rgba(37, 99, 235, 1)'
        },
        {
          data: data.map(d => d.dinero),
          label: 'Dinero ($)',
          backgroundColor: 'rgba(16, 185, 129, 0.7)',
          borderColor: 'rgba(16, 185, 129, 1)',
          borderWidth: 2,
          hoverBackgroundColor: 'rgba(16, 185, 129, 0.9)',
          hoverBorderColor: 'rgba(16, 185, 129, 1)'
        }
      ]
    };
  }

  public actualizarScroll(habilitarScroll: boolean): void {
    if (habilitarScroll) {
      this.doc.body.classList.add('no-scroll');
    } else {
      this.doc.body.classList.remove('no-scroll');
    }
  }

  filtrarRerserva(reservaId: number): void {
    const reserva = this.reservas_usuario.find(r => r.reservaId === reservaId);
    if (reserva) {
      this.selectedReserva = reserva;
    } else {
      this.notificationService.error('No se encontro tu reserva seleccionada');
    }
  }

  getReservarUsser(): void {
    if (!this.email) {
      this.notificationService.error('No te has registrado aun');
      return;
    }

    this.auth.getAccessTokenSilently().subscribe({
      next: (token) => {
        const data = { email: this.email };
        this.http.post(`${environment.apiUrl}/api/componente/reservas/usuario`, data, {
          headers: { Authorization: `Bearer ${token}` }
        })
          .subscribe({
            next: (reservas: any[]) => {
              this.reservas_usuario = reservas;
              this.analisisGrafica();
              if (reservas.length === 0) {
                this.notificationService.error('Actualmente no tienes reservas registradas');
              }
            },
            error: (err) => {
              console.error(err);
              this.notificationService.error('Error al cargar tus reservas');
            }
          });
      },
      error: (err) => {
        console.error(err);
        this.notificationService.error('No se pudo autenticar la sesión, error en el token');
      }
    });
  }

  formatearFecha(fecha: string): string {
    return fecha.replace('T', ' ');
  }

  handleReservaActualizada(event: any) {
    this.actualizarScroll(false);
    this.auth.getAccessTokenSilently().subscribe({
      next: (token) => {
        if (event.accion === 'actualizar') {
          this.http.put(`${environment.apiUrl}/api/reserva/actualizar/tiempo`, event, {
            headers: { Authorization: `Bearer ${token}` }
          })
            .subscribe({
              next: (response: any) => {
                this.notificationService.success(response.message, 'Reserva actualizada');
                this.getReservarUsser();
              },
              error: (err) => {
                this.notificationService.error(err.error.error || 'Hubo un error al actualizar la reserva.');
              }
            });
        } else if (event.accion === 'cancelar') {
          const body = {
            reservaId: event.reservaId,
            espacioId: event.espacioId
          };
          this.http.put(`${environment.apiUrl}/api/reserva/actualizar/cancelar`, body, {
            headers: { Authorization: `Bearer ${token}` }
          })
            .subscribe({
              next: (response: any) => {
                this.notificationService.success(response.message, 'Reserva actualizada');
                this.getReservarUsser();
              },
              error: (err) => {
                this.notificationService.error(err.error.error || 'Hubo un error al actualizar la reserva.');
              }
            });
        }
      },
      error: (err) => {
        console.error(err);
        this.notificationService.error('No se pudo autenticar la sesión, error en el token');
      }
    });
  }

  private calculoEstadisticas(fecha_inicio_input: string, fecha_fin_input: string) {
    if (!fecha_inicio_input || !fecha_fin_input) {
      this.notificationService.error('Fecha de incio o final vacio');
      return [];
    }
    const reservas = this.reservas_usuario;

    const parseDateToUTC = (dateStr: string): Date => {
      const [day, month, year] = dateStr.split('-');
      return new Date(Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day)));
    };

    const fecha_filtro_inicio = parseDateToUTC(fecha_inicio_input);
    const fecha_filtro_fin = parseDateToUTC(fecha_fin_input);

    const reservas_filtradas = reservas.filter(reserva => {
      const inicio_reserva = new Date(reserva.fechaInicio);
      const fin_reserva = new Date(reserva.fechaFin);

      const inicio_reserva_date_only = new Date(Date.UTC(inicio_reserva.getFullYear(), inicio_reserva.getMonth(), inicio_reserva.getDate()));
      const fin_reserva_date_only = new Date(Date.UTC(fin_reserva.getFullYear(), fin_reserva.getMonth(), fin_reserva.getDate()));

      const fin_reserva_es_despues_del_inicio_filtro = fin_reserva_date_only.getTime() >= fecha_filtro_inicio.getTime();
      const inicio_reserva_es_antes_del_fin_filtro = inicio_reserva_date_only.getTime() <= fecha_filtro_fin.getTime();

      return fin_reserva_es_despues_del_inicio_filtro && inicio_reserva_es_antes_del_fin_filtro;
    });

    const agrupadoPorMes: { [mes: string]: { reservas_mes: number; dinero: number } } = {};

    reservas_filtradas.forEach(reserva => {
      const fecha = new Date(reserva.fechaInicio);
      const mesNombre = this.meses[fecha.getMonth()];

      if (!agrupadoPorMes[mesNombre]) {
        agrupadoPorMes[mesNombre] = {
          reservas_mes: 0,
          dinero: 0
        };
      }

      agrupadoPorMes[mesNombre].reservas_mes += 1;
      agrupadoPorMes[mesNombre].dinero += Number(reserva.monto);
    });

    const dataGrafica = Object.keys(agrupadoPorMes).map(mes => ({
      mes,
      reservas_mes: agrupadoPorMes[mes].reservas_mes,
      dinero: agrupadoPorMes[mes].dinero,
      label: mes + ' - reservas ' + agrupadoPorMes[mes].reservas_mes,
      valor: agrupadoPorMes[mes].dinero
    }));

    return dataGrafica;
  }
}
