FROM node:8.11.4-alpine
RUN mkdir /app
WORKDIR /app
#COPY . . //se precisar rodar local
COPY ./src/backend/services/usuario.api ./
#VOLUME [ "/src/backend/services/usuario.api:/app" ]
RUN npm install
RUN npm install -g nodemon
RUN npm install -g sequelize-cli
EXPOSE 3000
CMD [ "npm", "start" ]