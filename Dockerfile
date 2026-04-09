FROM nginx:latest

LABEL org.opencontainers.image.source=https://github.com/Aquatica-Webedd/website


WORKDIR /usr/share/nginx/html

COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 79
EXPOSE 80
