# Mini-Booking Monorepo

Este es un monorepo para un proyecto de mini-booking para espacios de coworking que integra Auth0 para la autenticación.

## Estructura

- `backend/`: Aplicación Java Spring Boot
- `frontend/`: Aplicación Angular con Auth0
- `infra/`: Archivos de Docker y configuración de infraestructura
- `docs/`: Documentación del proyecto

## Configuración

### Auth0

Para configurar la autenticación, crea un archivo `auth_config.json` en la raíz del proyecto con la siguiente estructura:

```json
{
  "domain": "<TU AUTH0 DOMAIN>",
  "clientId": "<TU AUTH0 CLIENT ID>",
  "audience": "<TU AUTH0 API AUDIENCE>"
}
```

## Desarrollo

### Frontend
```bash
cd frontend
npm install
npm run dev
```
La aplicación estará disponible en `http://localhost:4200`

### Backend
```bash
cd backend
mvn spring-boot:run
```

## Producción

Para levantar todos los servicios en producción, utiliza Docker Compose:

```bash
docker-compose up -d
```

## Ejecución local con Docker (build local)

Esta opción levanta Postgres, el backend Spring Boot y el frontend (estático en Nginx) usando el archivo `docker-compose.local.yml`. No necesitas tener Java, Maven ni Node instalados si usas Docker Desktop.

### Requisitos
- Docker Desktop instalado y en ejecución.

### Levantar el entorno local

```powershell
# Desde la raíz del repo
docker compose -f docker-compose.local.yml up --build -d
```

Servicios y puertos por defecto:
- Frontend (Nginx): http://localhost:4200
- Backend (Spring Boot): http://localhost:8080
  - Swagger: http://localhost:8080/swagger-ui.html
- Base de datos (Postgres): localhost:5432 (db=mini_booking_db, user=postgres, pass=postgres)

Ver estado y puertos:
```powershell
docker compose -f docker-compose.local.yml ps
```

Ver logs recientes:
```powershell
docker compose -f docker-compose.local.yml logs --tail 200
```

Detener y limpiar contenedores (conservando datos de BD):
```powershell
docker compose -f docker-compose.local.yml down
```

Reset total (elimina también el volumen de la BD):
```powershell
docker compose -f docker-compose.local.yml down -v
```

### Notas importantes

- Frontend en local: la imagen del frontend copia el contenido ya compilado de `frontend/dist/login-demo` y lo sirve con Nginx. Si haces cambios en Angular, vuelve a generar el build y reconstruye la imagen:
  ```powershell
  cd frontend
  npm ci
  npm run build
  cd ..
  docker compose -f docker-compose.local.yml up --build -d
  ```

- Backend en local: el backend se conecta al contenedor `db` usando las variables definidas en `docker-compose.local.yml`. Para desarrollo local, se habilita `SPRING_JPA_HIBERNATE_DDL_AUTO=update` para crear/actualizar el esquema y permitir que el seeder cargue datos iniciales.

- Datos persistentes: la BD usa un volumen Docker `db_data`. Si necesitas comenzar desde cero, usa el reset total (`down -v`).

- Troubleshooting rápido:
  - Si `frontend` levanta pero APIs fallan, revisa la configuración de URLs del API usada por el build del frontend (puede estar fijada en el bundle de `dist`).
  - Verifica la salud del backend en Swagger: http://localhost:8080/swagger-ui.html
  - Ver logs específicos de un servicio: `docker compose -f docker-compose.local.yml logs <service>`

## Características

- Login y logout con Auth0
- Protección de rutas
- Perfil de usuario
- API con autenticación mediante tokens
