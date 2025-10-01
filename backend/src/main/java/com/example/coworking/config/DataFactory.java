package com.example.coworking.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import com.example.coworking.model.Espacio;
import com.example.coworking.model.EspacioServicio;
import com.example.coworking.model.Estado;
import com.example.coworking.model.Servicio;
import com.example.coworking.model.TipoEspacio;
import com.example.coworking.repository.EspacioRepository;
import com.example.coworking.repository.EspacioServicioRepository;
import com.example.coworking.repository.EstadoRepository;
import com.example.coworking.repository.ServicioRepository;
import com.example.coworking.repository.TipoEspacioRepository;

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

    public DataFactory(
            EspacioRepository espacioRepo,
            ServicioRepository servicioRepo,
            TipoEspacioRepository tipoEspacioRepo,
            EstadoRepository estadoRepo,
            EspacioServicioRepository espacioServicioRepo) {

        this.espacioRepo = espacioRepo;
        this.servicioRepo = servicioRepo;
        this.tipoEspacioRepo = tipoEspacioRepo;
        this.estadoRepo = estadoRepo;
        this.espacioServicioRepo = espacioServicioRepo;
    }

    @Override
    public void run(String... args) {
        Random random = new Random();

        if (espacioRepo.count() == 0 && servicioRepo.count() == 0) {
            String[] tipos = { "sala", "escritorio", "sala de juntas" };
            String[] tipos_servicio = { "Wifi", "Aire Acondicionado", "Cafés", "Proyector", "Estacionamiento" };
            String[] estados = { "disponible", "ocupado", "mantenimiento" };

            // Crear catálogos de tipos de espacio
            List<TipoEspacio> tiposBase = new ArrayList<>();
            for (String nombreTipo : tipos) {
                TipoEspacio t = new TipoEspacio();
                t.setNombre(nombreTipo);
                tipoEspacioRepo.save(t);
                tiposBase.add(t);
            }

            // Crear catálogos de estados
            List<Estado> estadosBase = new ArrayList<>();
            for (String nombreEstado : estados) {
                Estado e = new Estado();
                e.setNombre(nombreEstado);
                estadoRepo.save(e);
                estadosBase.add(e);
            }

            // Crear los servicios base primero
            List<Servicio> serviciosBase = new ArrayList<>();
            for (String nombreServicio : tipos_servicio) {
                Servicio s = new Servicio();
                s.setNombre(nombreServicio);
                s.setDescripcion("Servicio de " + nombreServicio);
                servicioRepo.save(s);
                serviciosBase.add(s);
            }

            // Crear espacios y asignar servicios
            for (int i = 1; i <= 10; i++) {
                Espacio espacio = new Espacio();
                espacio.setNombre("Espacio " + i);
                espacio.setCapacidad(5 + random.nextInt(20));
                espacio.setPrecio(20.0 + random.nextInt(100));

                // Asignar tipo y estado aleatorios desde los catálogos
                espacio.setTipo(tiposBase.get(random.nextInt(tiposBase.size())));
                espacio.setEstado(estadosBase.get(random.nextInt(estadosBase.size())));

                espacioRepo.save(espacio);

                // Elegir servicios aleatorios
                int serviciosCount = 2 + random.nextInt(3); // entre 2 y 4 servicios
                Collections.shuffle(serviciosBase);
                List<Servicio> serviciosAsignados = serviciosBase.subList(0, serviciosCount);

                for (Servicio s : serviciosAsignados) {
                    EspacioServicio es = new EspacioServicio();
                    es.setEspacio(espacio);
                    es.setServicio(s);
                    espacioServicioRepo.save(es);
                }
            }
        }
        System.out.println("Sedder ejecutado");
    }
}
