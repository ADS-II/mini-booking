# Arquitectura del Sistema - Mini Booking

## 1. Descripción General

Mini Booking es una aplicación web full-stack diseñada para gestionar un sistema de reservas simple. Permite a los usuarios ver elementos disponibles y realizar reservas, mientras que los administradores pueden gestionar el inventario.

La aplicación consta de tres componentes principales:
- **Frontend:** Una aplicación de una sola página (SPA) construida con Angular que proporciona la interfaz de usuario.
- **Backend:** Una API RESTful desarrollada con Java y Spring Boot, que maneja la lógica de negocio y la persistencia de datos.
- **Base de Datos:** Una base de datos relacional PostgreSQL para almacenar toda la información de la aplicación.

## 2. Arquitectura de Software

### 2.1. Arquitectura del Backend (API RESTful)

El backend sigue una arquitectura en capas, implementando el patrón **Modelo-Vista-Controlador (MVC)** de la siguiente manera:

- **Modelo (Model):** Representado por las entidades JPA (`@Entity`) que se mapean a las tablas de la base de datos. Contienen los datos y las reglas de negocio fundamentales.
- **Vista (View):** La "vista" en el contexto de una API RESTful es la representación de los datos, generalmente en formato JSON, que se envía a los clientes.
- **Controlador (Controller):** Clases anotadas con `@RestController` que manejan las peticiones HTTP. Su función es recibir la entrada del usuario, interactuar con los servicios y devolver una respuesta (el "Modelo" serializado como JSON).

Además, se utilizan **Capas de Servicio (`@Service`)** para separar la lógica de negocio de los controladores y **Repositorios (`@Repository`)** (usando Spring Data JPA) para abstraer el acceso a datos.

### 2.2. Arquitectura del Frontend

El frontend es una Single Page Application (SPA) desarrollada con Angular. Su arquitectura es modular y está basada en componentes, siguiendo las mejores prácticas de Angular.

