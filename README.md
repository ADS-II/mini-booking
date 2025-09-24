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

## Características

- Login y logout con Auth0
- Protección de rutas
- Perfil de usuario
- API con autenticación mediante tokens
