FROM node:8.11.4-alpine
RUN mkdir /app
WORKDIR /app
#COPY . . //se precisar rodar local
COPY ./src/backend/services/usuario.api ./
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]