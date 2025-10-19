package com.example.coworking.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Clase de configuración de seguridad de la aplicación.
 * 
 * Esta clase define las reglas de seguridad para los endpoints de la API
 * 
 */
@Configuration
public class SecurityConfig {

    /**
     * Configuracion  de filtros de seguridad HTTP.
     * Define qué rutas son públicas, cuáles requieren autenticación y
     * habilita la validación de tokens JWT.
     *
     * @param http objeto HttpSecurity usado para configurar la seguridad HTTP
     * @return la configuración de la cadena de filtros de seguridad
     * @throws Exception si ocurre algún error al construir la configuración
     */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            // Habilita CORS usando la configuración definida en CorsConfig
            .cors(Customizer.withDefaults())

            // deshabilita CSRF, por que usamos jwt tocken
            .csrf(csrf -> csrf.disable())

            // configuramos rutas publicas y privadas
            .authorizeHttpRequests(auth -> auth
                // Permitimos todas las solicitudes
                .requestMatchers(org.springframework.http.HttpMethod.OPTIONS, "/**").permitAll()

                // rutas que son accesibles sin autenticacion
                .requestMatchers("/api/public/**").permitAll()

                // protegemos estas rutas ya que son obligatorias que el usuario se encuentre logeado
                .requestMatchers(
                    "/api/componente/reservas/usuario", // ruta de mostrar las reservas del usuario autenticado
                    "/api/reserva/actualizar/tiempo", // ruta de modificar reserva
                    "/api/reserva/actualizar/cancelar", // ruta de cancelar reserva
                    "/api/reserva/crear" // ruta de crear resera
                ).authenticated()

                // alguna otra ruta que no hemos especificada se permite
                .anyRequest().permitAll()
            )

            // configuracion de la aplicación como un Resource Server que valida tokens JWT
            .oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults()));

        return http.build();
    }
}
