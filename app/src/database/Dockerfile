FROM mysql:5.6.41
VOLUME [ "/src/database", "/var/lib/mysql" ]
EXPOSE 3306
#LOCAL
#COPY ./script.sql /docker-entrypoint-initdb.d/
#COMPOSE
COPY ./src/database/00-script.sql /docker-entrypoint-initdb.d/
COPY ./src/database/01-permissions.sql /docker-entrypoint-initdb.d/