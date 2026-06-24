# Stage 1 — build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2 — serve
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY public/logo.png /usr/share/nginx/html/logo.png
COPY public/favicon.ico /usr/share/nginx/html/favicon.ico
RUN echo 'server { listen 80; root /usr/share/nginx/html; location ~* \.(png|jpg|svg|ico|woff2|js|css)$ { expires 1y; try_files $uri =404; } location / { try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
