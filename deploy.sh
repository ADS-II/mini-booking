#!/bin/bash

# Script de deploy automatizado para mini-booking
# Uso: ./deploy.sh [backend|frontend|all]

set -e

COLOR_GREEN='\033[0;32m'
COLOR_YELLOW='\033[1;33m'
COLOR_RED='\033[0;31m'
COLOR_RESET='\033[0m'

log_info() {
    echo -e "${COLOR_GREEN}[INFO]${COLOR_RESET} $1"
}

log_warn() {
    echo -e "${COLOR_YELLOW}[WARN]${COLOR_RESET} $1"
}

log_error() {
    echo -e "${COLOR_RED}[ERROR]${COLOR_RESET} $1"
}

deploy_backend() {
    log_info "Deteniendo contenedor backend..."
    sudo docker compose stop ads-coworking-app
    
    log_info "Eliminando contenedor backend..."
    sudo docker compose rm -f ads-coworking-app
    
    log_info "Reconstruyendo imagen backend (usando Dockerfile en raiz)..."
    sudo docker compose build --no-cache ads-coworking-app
    
    log_info "Iniciando backend..."
    sudo docker compose up -d ads-coworking-app
    
    log_info "Esperando que backend esté listo..."
    sleep 15
    
    log_info "Backend desplegado exitosamente"
}

deploy_frontend() {
    log_info "Deteniendo contenedor frontend..."
    sudo docker compose stop frontend
    
    log_info "Eliminando contenedor frontend..."
    sudo docker compose rm -f frontend
    
    log_info "Reconstruyendo imagen frontend..."
    sudo docker compose build --no-cache frontend
    
    log_info "Iniciando frontend..."
    sudo docker compose up -d frontend
    
    log_info "Frontend desplegado exitosamente"
}

deploy_all() {
    log_info "Deteniendo todos los contenedores..."
    sudo docker compose down
    
    log_info "Eliminando volumenes hgituerfanos..."
    sudo docker volume prune -f
    
    log_info "Reconstruyendo todas las imagenes..."
    sudo docker compose build --no-cache
    
    log_info "Iniciando todos los servicios..."
    sudo docker compose up -d
    
    log_info "Esperando que los servicios inicien..."
    sleep 20
    
    log_info "Todos los servicios desplegados exitosamente"
}

show_logs() {
    log_info "Mostrando logs (Ctrl+C para salir)..."
    sudo docker compose logs -f --tail=50
}

check_status() {
    log_info "Estado de los contenedores:"
    sudo docker compose ps
    echo ""
    log_info "Backend (Spring Boot): http://localhost:8080"
    log_info "Frontend (Angular): http://localhost:4200"
    echo ""
    log_info "Para ver logs: ./deploy.sh logs"
}

case "$1" in
    backend)
        deploy_backend
        check_status
        ;;
    frontend)
        deploy_frontend
        check_status
        ;;
    all)
        deploy_all
        check_status
        ;;
    logs)
        show_logs
        ;;
    status)
        check_status
        ;;
    *)
        log_warn "Uso: $0 {backend|frontend|all|logs|status}"
        echo ""
        echo "Comandos disponibles:"
        echo "  backend  - Redesplegar solo el backend (usa Dockerfile en raiz)"
        echo "  frontend - Redesplegar solo el frontend"
        echo "  all      - Redesplegar todo el sistema"
        echo "  logs     - Ver logs en tiempo real"
        echo "  status   - Ver estado de los contenedores"
        echo ""
        echo "Ejemplos:"
        echo "  ./deploy.sh all       # Primera vez o cambios en ambos"
        echo "  ./deploy.sh frontend  # Solo cambios en Angular"
        echo "  ./deploy.sh backend   # Solo cambios en Spring Boot"
        exit 1
        ;;
esac