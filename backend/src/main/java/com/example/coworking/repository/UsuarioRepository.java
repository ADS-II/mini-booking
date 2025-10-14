package com.example.coworking.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.example.coworking.dto.ReservasUsuarioDTO;
import com.example.coworking.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    Usuario findByEmail(String email);

    // tramemos las reservas de un usuario

    @Query("SELECT new com.example.coworking.dto.ReservasUsuarioDTO(" +
        "r.id, " +
        "u.nombre, " +
        "u.email, " +
        "e.nombre, " +
        "te.nombre, " +
        "ub.zona, " +
        "ub.direccion, " +
        "r.fechaInicio, " +
        "r.fechaFin, " +
        "er.nombre, " + // estado de la reserva
        "ee.nombre, " + // estado del espacio
        "p.monto) " +
        "FROM Pago p " +
        "JOIN p.reserva r " +
        "JOIN r.estado er " +
        "JOIN r.usuario u " +
        "JOIN r.espacio e " +
        "JOIN e.estado ee " +
        "JOIN e.tipo te " +
        "JOIN te.ubicacion ub " +
        "WHERE u.email = :email")
List<ReservasUsuarioDTO> findReservasByUsuarioEmail(@Param("email") String email);

}