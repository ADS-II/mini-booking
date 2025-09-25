package com.example.coworking.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.coworking.model.Usuario;
import com.example.coworking.model.Espacio;
import com.example.coworking.model.Reserva;
import com.example.coworking.model.Servicio;
import com.example.coworking.model.Pago;
import com.example.coworking.repository.UsuarioRepository;
import com.example.coworking.repository.EspacioRepository;
import com.example.coworking.repository.ReservaRepository;
import com.example.coworking.repository.ServicioRepository;
import com.example.coworking.repository.PagoRepository;

import java.time.LocalDateTime;
import java.util.Random;

@Component
public class DataFactory implements CommandLineRunner {

    private final UsuarioRepository usuarioRepo;
    private final EspacioRepository espacioRepo;
    private final ReservaRepository reservaRepo;
    private final PagoRepository pagoRepo;
    private final ServicioRepository servicioRepo;

    public DataFactory(UsuarioRepository usuarioRepo,
            EspacioRepository espacioRepo,
            ReservaRepository reservaRepo,
            PagoRepository pagoRepo,
            ServicioRepository servicioRepo) {
        this.usuarioRepo = usuarioRepo;
        this.espacioRepo = espacioRepo;
        this.reservaRepo = reservaRepo;
        this.pagoRepo = pagoRepo;
        this.servicioRepo = servicioRepo;
    }

    @Override
    public void run(String... args) {
        Random random = new Random();

        // ==== Usuarios ====
        if (usuarioRepo.count() == 0) {
            for (int i = 1; i <= 10; i++) {
                Usuario user = new Usuario();
                user.setNombre("Usuario " + i);
                user.setEmail("usuario" + i + "@demo.com");
                // user.setPassword("password" + i);
                usuarioRepo.save(user);
            }
        }

        if (espacioRepo.count() == 0) {
            String[] tipos = { "sala", "escritorio", "sala de juntas" };
            String[] tipos_servicio = { "wifi", "Aire Acondicionado", "Cafes" };
            String[] estados = { "disponible", "ocupado", "mantenimiento" };
            for (int i = 1; i <= 10; i++) {
                Espacio espacio = new Espacio();
                espacio.setNombre("Espacio " + i);
                espacio.setTipo(tipos[random.nextInt(tipos.length)]);
                espacio.setCapacidad(5 + random.nextInt(20));
                espacio.setPrecio(20.0 + random.nextInt(100));
                espacio.setEstado(estados[random.nextInt(estados.length)]);
                espacioRepo.save(espacio);

                int serviciosCount = 2 + random.nextInt(2);
                for (int j = 0; j < serviciosCount; j++) {
                    Servicio s = new Servicio();
                    s.setNombre(tipos_servicio[random.nextInt(tipos_servicio.length)]);
                    s.setDescripcion("Servicio para " + espacio.getNombre());
                    s.setEspacio(espacio);
                    servicioRepo.save(s);
                }
            }

        }

        if (reservaRepo.count() == 0) {
            var usuarios = usuarioRepo.findAll();
            var espacios = espacioRepo.findAll();
            String[] estadosReserva = { "pendiente", "confirmada", "cancelada", "completada" };

            for (int i = 1; i <= 10; i++) {
                Reserva reserva = new Reserva();
                reserva.setUsuario(usuarios.get(random.nextInt(usuarios.size())));
                reserva.setEspacio(espacios.get(random.nextInt(espacios.size())));

                LocalDateTime inicio = LocalDateTime.now().plusDays(random.nextInt(5));
                reserva.setFechaInicio(inicio);

                // Calcular hora de entrada aleatoria (puedes personalizar el rango de horas
                // según necesites)
                LocalDateTime horaEntrada = inicio.withHour(random.nextInt(8) + 9)
                        .withMinute(random.nextInt(60))
                        .withSecond(0);

                LocalDateTime horaSalida = horaEntrada.plusHours(2 + random.nextInt(5));

                LocalDateTime fin = horaSalida;
                reserva.setFechaFin(fin);

                reserva.setEstado(estadosReserva[random.nextInt(estadosReserva.length)]);
                reservaRepo.save(reserva);
            }
        }

        // ==== Pagos ====
        if (pagoRepo.count() == 0) {
            var reservas = reservaRepo.findAll();
            String[] estadosPago = { "pendiente", "pagado", "fallido" };
            String[] metodos = { "stripe", "paypal", "efectivo" };

            for (int i = 1; i <= 10; i++) {
                Pago pago = new Pago();
                pago.setReserva(reservas.get(random.nextInt(reservas.size())));
                pago.setMonto(50.0 + random.nextInt(200));
                pago.setMetodo(metodos[random.nextInt(metodos.length)]);
                pago.setEstado(estadosPago[random.nextInt(estadosPago.length)]);
                pago.setComprobanteUrl("http://demo.com/comprobante" + i + ".pdf");
                pagoRepo.save(pago);
            }
        }

        System.out.println("✅ Datos de prueba insertados correctamente.");
    }
}
