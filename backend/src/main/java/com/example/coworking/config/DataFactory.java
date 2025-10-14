package com.example.coworking.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import com.example.coworking.model.Espacio;
import com.example.coworking.model.EspacioServicio;
import com.example.coworking.model.Estado;
import com.example.coworking.model.EstadoPago;
import com.example.coworking.model.EstadoReserva;
import com.example.coworking.model.MetodoPago;
import com.example.coworking.model.Servicio;
import com.example.coworking.model.TipoEspacio;
import com.example.coworking.model.Ubicacion;
import com.example.coworking.repository.EspacioRepository;
import com.example.coworking.repository.EspacioServicioRepository;
import com.example.coworking.repository.EstadoPagoRepository;
import com.example.coworking.repository.EstadoRepository;
import com.example.coworking.repository.EstadoReservaRepository;
import com.example.coworking.repository.MetodoPagoRepository;
import com.example.coworking.repository.ServicioRepository;
import com.example.coworking.repository.TipoEspacioRepository;
import com.example.coworking.repository.UbicacionRepository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

@Component
public class DataFactory implements CommandLineRunner {

    private final EspacioRepository espacioRepo;
    private final ServicioRepository servicioRepo;
    private final TipoEspacioRepository tipoEspacioRepo;
    private final EstadoRepository estadoRepo;
    private final EspacioServicioRepository espacioServicioRepo;
    private final UbicacionRepository ubicacionRepo;
    private final MetodoPagoRepository metodoPagoRepo;
    private final EstadoReservaRepository estadoReservaRepo;

    private final EstadoPagoRepository estadoPagoRepo;  // Nuevo repositorio para EstadoPago

    public DataFactory(
            EspacioRepository espacioRepo,
            ServicioRepository servicioRepo,
            TipoEspacioRepository tipoEspacioRepo,
            EstadoRepository estadoRepo,
            EspacioServicioRepository espacioServicioRepo,
            UbicacionRepository ubicacionRepo,
            MetodoPagoRepository metodoPagoRepo,
            EstadoReservaRepository estadoReservaRepo,
            EstadoPagoRepository estadoPagoRepo) {
        this.espacioRepo = espacioRepo;
        this.servicioRepo = servicioRepo;
        this.tipoEspacioRepo = tipoEspacioRepo;
        this.estadoRepo = estadoRepo;
        this.espacioServicioRepo = espacioServicioRepo;
        this.ubicacionRepo = ubicacionRepo;
        this.metodoPagoRepo = metodoPagoRepo;
        this.estadoReservaRepo = estadoReservaRepo;
        this.estadoPagoRepo = estadoPagoRepo;
    }

    @Override
    public void run(String... args) {
        // creamos registro para todas las tablas necesarias
         if (estadoPagoRepo.count() == 0) {
            EstadoPago estadoPago1 = new EstadoPago();
            estadoPago1.setNombre("Completado");
            estadoPagoRepo.save(estadoPago1);

            EstadoPago estadoPago2 = new EstadoPago();
            estadoPago2.setNombre("Pendiente");
            estadoPagoRepo.save(estadoPago2);

            EstadoPago estadoPago3 = new EstadoPago();
            estadoPago3.setNombre("Rechazado");
            estadoPagoRepo.save(estadoPago3);

            System.out.println("Estados de pago creados");
        }

        if (estadoRepo.count() == 0) {
            Estado estado1 = new Estado();
            estado1.setNombre("disponible");
            estadoRepo.save(estado1);

            Estado estado2 = new Estado();
            estado2.setNombre("ocupado");
            estadoRepo.save(estado2);

            Estado estado3 = new Estado();
            estado3.setNombre("mantenimiento");
            estadoRepo.save(estado3);

            System.out.println("Estados creados");
        }


        if (ubicacionRepo.count() == 0) {
            Ubicacion ubicacion1 = new Ubicacion();
            ubicacion1.setDireccion("Avenida 1, San Salvador Norte");
            ubicacion1.setZona("San Salvador Norte");
            ubicacion1.setHorario("24/7");
            ubicacionRepo.save(ubicacion1);

            Ubicacion ubicacion2 = new Ubicacion();
            ubicacion2.setDireccion("Avenida 2, San Salvador Sur");
            ubicacion2.setZona("San Salvador Sur");
            ubicacion2.setHorario("8 AM - 5 PM");
            ubicacionRepo.save(ubicacion2);

            Ubicacion ubicacion3 = new Ubicacion();
            ubicacion3.setDireccion("Avenida 3, San Salvador Este");
            ubicacion3.setZona("San Salvador Este");
            ubicacion3.setHorario("6 PM - 6 AM");
            ubicacionRepo.save(ubicacion3);

            System.out.println("Ubicaciones creadas");
        }


        if (tipoEspacioRepo.count() == 0) {
            TipoEspacio tipo1 = new TipoEspacio();
            tipo1.setNombre("Escritorio Flexible");
            tipo1.setUbicacion(ubicacionRepo.findByZona("San Salvador Norte"));
            tipoEspacioRepo.save(tipo1);

            TipoEspacio tipo2 = new TipoEspacio();
            tipo2.setNombre("Sala de Reuniones");
            tipo2.setUbicacion(ubicacionRepo.findByZona("San Salvador Sur"));
            tipoEspacioRepo.save(tipo2);

            TipoEspacio tipo3 = new TipoEspacio();
            tipo3.setNombre("Oficina Privada");
            tipo3.setUbicacion(ubicacionRepo.findByZona("San Salvador Este"));
            tipoEspacioRepo.save(tipo3);

            System.out.println("Tipos de espacio creados");
        }


        if (servicioRepo.count() == 0) {
            Servicio servicio1 = new Servicio();
            servicio1.setNombre("Wifi");
            servicio1.setDescripcion("Conexión inalámbrica a Internet");
            servicioRepo.save(servicio1);

            Servicio servicio2 = new Servicio();
            servicio2.setNombre("Aire Acondicionado");
            servicio2.setDescripcion("Sistema de aire acondicionado");
            servicioRepo.save(servicio2);

            Servicio servicio3 = new Servicio();
            servicio3.setNombre("Café");
            servicio3.setDescripcion("Café gratis para los usuarios");
            servicioRepo.save(servicio3);

            Servicio servicio4 = new Servicio();
            servicio4.setNombre("Proyector");
            servicio4.setDescripcion("Proyector para presentaciones");
            servicioRepo.save(servicio4);

            Servicio servicio5 = new Servicio();
            servicio5.setNombre("Estacionamiento");
            servicio5.setDescripcion("Espacios de estacionamiento disponibles");
            servicioRepo.save(servicio5);

            System.out.println("Servicios creados");
        }


        if (metodoPagoRepo.count() == 0) {
            MetodoPago metodo1 = new MetodoPago();
            metodo1.setNombre("Transferencia");
            metodoPagoRepo.save(metodo1);

            MetodoPago metodo2 = new MetodoPago();
            metodo2.setNombre("Efectivo");
            metodoPagoRepo.save(metodo2);

            System.out.println("Métodos de pago creados");
        }

  
        if (estadoReservaRepo.count() == 0) {
            EstadoReserva estadoReserva1 = new EstadoReserva();
            estadoReserva1.setNombre("Pendiente");
            estadoReservaRepo.save(estadoReserva1);

            EstadoReserva estadoReserva2 = new EstadoReserva();
            estadoReserva2.setNombre("Cancelado");
            estadoReservaRepo.save(estadoReserva2);

            EstadoReserva estadoReserva3 = new EstadoReserva();
            estadoReserva3.setNombre("Completado");
            estadoReservaRepo.save(estadoReserva3);

            System.out.println("Estados de reserva creados");
        }


        if (espacioRepo.count() == 0) {
            Random random = new Random();
            List<TipoEspacio> tipos = tipoEspacioRepo.findAll();
            List<Estado> estados = estadoRepo.findAll();
            List<Servicio> servicios = servicioRepo.findAll();

            for (int i = 1; i <= 10; i++) {
                Espacio espacio = new Espacio();
                espacio.setNombre("Espacio " + i);
                espacio.setCapacidad(5 + random.nextInt(15)); 
                espacio.setPrecio(20.0 + random.nextInt(100)); 

                // Asigno tipo y estado aleatorios
                espacio.setTipo(tipos.get(random.nextInt(tipos.size())));
                espacio.setEstado(estados.get(random.nextInt(estados.size())));

                espacioRepo.save(espacio);

                // Asigno servicios aleatorios
                int serviciosCount = 2 + random.nextInt(3); 
                Collections.shuffle(servicios);
                List<Servicio> serviciosAsignados = servicios.subList(0, serviciosCount);

                for (Servicio s : serviciosAsignados) {
                    EspacioServicio espacioServicio = new EspacioServicio();
                    espacioServicio.setEspacio(espacio);
                    espacioServicio.setServicio(s);
                    espacioServicioRepo.save(espacioServicio);
                }

                System.out.println("Espacio " + i + " creado con servicios");
            }
        }
    }
}
