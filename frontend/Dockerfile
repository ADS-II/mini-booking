# Etapa 1: Build de Angular
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build --prod

# Etapa 2: Servir con Nginx
FROM nginx:alpine
COPY --from=build /app/dist/* /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]





































# FROM node:18-alpine AS build

# RUN apk update && apk add git

# RUN mkdir -p /app

# WORKDIR /app

# COPY package.json .
# COPY package-lock.json .

# RUN npm install --legacy-peer-deps

# COPY . .

# RUN npm run build

# # -----------------

# FROM node:18-alpine

# RUN mkdir -p /app

# WORKDIR /app

# COPY package.json .
# COPY package-lock.json .

# RUN npm install --production --legacy-peer-deps

# COPY --from=build ./app/dist/login-demo ./dist
# COPY ./server.js .
# COPY ./api-server.js .
# COPY ./auth_config.json .

# ENV NODE_ENV=production
# ENV SERVER_PORT=4200
# ENV API_SERVER_PORT=3001

# EXPOSE 4200
# EXPOSE 3001

# CMD ["npm", "run", "prod"]
