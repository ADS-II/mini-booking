## Ejecutar con Docker usando variables locales

Objetivo: levantar la aplicación con Docker Compose usando variables locales (archivo `.env.local`) sin modificar la configuración usada por Render.

Pasos:

1. Crear archivo local de variables (no lo subas al repositorio):

```powershell
# desde la raíz del repo
Copy-Item .\.env.local.example .\.env.local
# editar .env.local y ajustar credenciales (DB, auth, etc.)
notepad .\.env.local
```

2. Verifica que `docker-compose.override.yml` existe (se aplica automáticamente junto a `docker-compose.yml`). Este archivo está preparado para decirle a Compose que cargue `.env.local` y forzar `SPRING_PROFILES_ACTIVE=local`.

3. Levanta los servicios con Docker Compose (Compose V2 o V1):

```powershell
# Compose V2 (recomendado si tienes la CLI moderna)
docker compose up -d

# o la antigua sintaxis
docker-compose up -d
```

4. Comprobaciones:
- `docker compose ps` o `docker ps` para ver contenedores.
- Si la app no arranca, inspecciona logs: `docker compose logs -f ads-coworking-app`

Notas:
- `docker-compose.override.yml` solo afecta a tu entorno local; Render usará el `docker-compose.yml` original.
- Si quieres apuntar a una base de datos PostgreSQL local ejecutada en tu máquina, usa `host.docker.internal` como `SPRING_DATASOURCE_DB_HOST` (Windows). Si vas a ejecutar Postgres también en Docker, crea un servicio `postgres` y usa ese nombre como host.
- No subas `.env.local` con credenciales reales al repositorio. Añade `.env.local` a tu archivo `.gitignore` si lo deseas.
