FROM mysql:5.6.41
VOLUME [ "/src/database", "/var/lib/mysql" ]
EXPOSE 3306
#LOCAL
#COPY ./script.sql /docker-entrypoint-initdb.d/
#COMPOSE
COPY ./src/database/sql.data/config/00-script.sql /docker-entrypoint-initdb.d/
COPY ./src/database/sql.data/config/01-permissions.sql /docker-entrypoint-initdb.d/