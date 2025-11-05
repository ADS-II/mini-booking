# Mini-Booking — levantar en local (rápido)

1) Levanta todo con Docker Compose:

```sh
docker compose up -d
# (o docker-compose up -d si usas la CLI antigua)
```

2) Comprobar estado / logs:

```sh
docker compose ps
docker compose logs -f ads-coworking-app
docker compose logs -f db
```

Para parar y eliminar volúmenes locales (reset de BD):

```sh
docker compose down -v
```

Notas:
- `docker-compose.override.yml` se aplica automáticamente en local y lee `.env.local`.
- No es necesario entrar en `backend/` o `frontend/` — el `docker compose up` construye y arranca todo.
