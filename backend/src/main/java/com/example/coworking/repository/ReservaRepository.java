package com.example.coworking.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.coworking.dto.ReservaDTO;
import com.example.coworking.model.Espacio;
import com.example.coworking.model.Reserva;

public interface ReservaRepository extends JpaRepository<Reserva, Integer> {
        // Verifica si existe alguna reserva que se cruce con las fechas dadas
        boolean existsByEspacioAndFechaInicioBeforeAndFechaFinAfter(
                        Espacio espacio, LocalDateTime fechaFin, LocalDateTime fechaInicio);

        // Verifica si existe una reserva en el espacio, con las fechas indicadas, y que
        // no sea la misma reserva
        @Query("SELECT CASE WHEN COUNT(r) > 0 THEN true ELSE false END FROM Reserva r WHERE r.espacio = :espacio AND r.fechaInicio BETWEEN :fechaInicio AND :fechaFin AND r.id <> :id")
        boolean existsByEspacioAndFechaInicioBetweenAndFechaFinBetweenAndIdNot(@Param("espacio") Espacio espacio,
                        @Param("fechaInicio") LocalDateTime fechaInicio,
                        @Param("fechaFin") LocalDateTime fechaFin,
                        @Param("id") Integer id);

        @Query("SELECT new com.example.coworking.dto.ReservaDTO(" +
                        "r.id, u.nombre, u.email, e.nombre, r.fechaInicio, r.fechaFin, p.estado.nombre, p.monto) " +
                        "FROM Pago p " +
                        "JOIN p.reserva r " +
                        "JOIN r.usuario u " +
                        "JOIN r.espacio e")
        List<ReservaDTO> findAllWithDetails();





        


        

}