FROM --platform=linux/amd64 mysql:latest
ENV MYSQL_ROOT_PASSWORD=password
EXPOSE 3306
COPY init.sql /docker-entrypoint-initdb.d/