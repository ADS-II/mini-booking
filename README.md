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

### Configuración inicial

1. Crea un archivo `.env` en la raíz del proyecto copiando el archivo de ejemplo:
   ```powershell
   # Desde la raíz del repo
   copy .env.example .env
   ```

2. Crea un archivo `auth_config.json` en el directorio `frontend` copiando el archivo de ejemplo:
   ```powershell
   copy frontend\auth_config.json.example frontend\auth_config.json
   ```

3. (Opcional) Edita el archivo `.env` para personalizar las variables de entorno según tus necesidades:
   - Credenciales de base de datos
   - Configuración de Auth0
   - Puertos
   - Configuración de Spring Boot

   El archivo `.env.example` contiene valores por defecto que funcionan para desarrollo local sin modificaciones.

4. (Opcional) Edita el archivo `frontend/auth_config.json` con tus credenciales de Auth0 si deseas usar autenticación real. Para desarrollo básico sin autenticación, los valores de ejemplo son suficientes.

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

### Verificación rápida (salud)

Comprobar que los endpoints responden desde PowerShell:

```powershell
# Frontend (index): debería devolver 200
powershell -NoProfile -Command "(Invoke-WebRequest -UseBasicParsing http://localhost:4200).StatusCode"

# Backend (Swagger): debería devolver 200
powershell -NoProfile -Command "(Invoke-WebRequest -UseBasicParsing http://localhost:8080/swagger-ui.html).StatusCode"
```

### Ciclo de desarrollo (cambios locales)

- Cambios en frontend (Angular):
  1) Genera el build estático
     ```powershell
     cd frontend
     npm ci
     npm run build
     cd ..
     ```
  2) Reconstruye y levanta el contenedor Nginx con los estáticos nuevos
     ```powershell
     docker compose -f docker-compose.local.yml up --build -d
     ```

- Cambios en backend (Spring Boot):
  - El contenedor recompila con Maven en cada `--build`. Si cambias código Java:
    ```powershell
    docker compose -f docker-compose.local.yml up --build -d
    ```

- Cambios en esquema/datos:
  - Con `SPRING_JPA_HIBERNATE_DDL_AUTO=update` se aplican alter menores automáticamente.
  - Para limpiar datos por completo:
    ```powershell
    docker compose -f docker-compose.local.yml down -v
    docker compose -f docker-compose.local.yml up --build -d
    ```

### Personalizar puertos/credenciales (opcional)

Edita el archivo `.env` en la raíz del proyecto para personalizar las variables de entorno:

```env
# Ejemplo de personalización en .env
POSTGRES_DB=mi_base_datos
POSTGRES_USER=mi_usuario
POSTGRES_PASSWORD=mi_password_seguro
DB_PORT=5433  # Si el puerto 5432 ya está en uso

# URL de conexión (asegúrate de que coincida con las credenciales de arriba)
SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/mi_base_datos
SPRING_DATASOURCE_USERNAME=mi_usuario
SPRING_DATASOURCE_PASSWORD=mi_password_seguro

# Configuración de Auth0 (reemplaza con tus valores reales)
AUTH_JWT_ISSUER_URI=https://tu-tenant.auth0.com/
AUTH_JWT_AUDIENCE=tu-api-audience
```

Alternativamente, puedes editar directamente `docker-compose.local.yml` si prefieres valores hardcodeados:

```yaml
services:
  db:
    environment:
      POSTGRES_DB: mini_booking_db
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    ports:
      - "5432:5432"  # cambia el puerto host si ya está en uso

  ads-coworking-app:
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://db:5432/mini_booking_db
      SPRING_DATASOURCE_USERNAME: postgres
      SPRING_DATASOURCE_PASSWORD: postgres
      SPRING_JPA_HIBERNATE_DDL_AUTO: update
    ports:
      - "8080:8080"  # cambia a 8081 si 8080 está ocupado

  frontend:
    ports:
      - "4200:80"    # cambia a 4300 si 4200 está ocupado
```

## Características

- Login y logout con Auth0
- Protección de rutas
- Perfil de usuario
- API con autenticación mediante tokens
