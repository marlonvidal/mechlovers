FROM mysql:5.6.41
VOLUME [ "/src/database", "/var/lib/mysql" ]
EXPOSE 3306
#LOCAL
#COPY ./script.sql /docker-entrypoint-initdb.d/
#COMPOSE
COPY ./src/database/script.sql /docker-entrypoint-initdb.d/