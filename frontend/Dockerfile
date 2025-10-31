# Imagen ultraligera de nginx
FROM nginx:alpine

COPY dist/login-demo /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# docker build -t login-demo .
# docker run -d -p 4200:80 --name login-container login-demo



# # Etapa 1: Build de Angular
# FROM node:20-alpine AS build
# WORKDIR /app

# # Copiar package files
# COPY package*.json ./

# # Limpiar cache y reinstalar dependencias
# RUN npm cache clean --force && \
#     npm install --legacy-peer-deps

# # Copiar archivos de la aplicacion
# COPY . .

# # Build de produccion
# RUN npm run build

# # Etapa 2: Servir con Nginx
# FROM nginx:alpine

# # Copiar build de Angular
# COPY --from=build /app/dist/login-demo /usr/share/nginx/html

# # Copiar configuracion custom de nginx
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Exponer puerto 80
# EXPOSE 80

# # Comando de inicio
# CMD ["nginx", "-g", "daemon off;"]