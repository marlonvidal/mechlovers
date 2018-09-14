FROM node:8.11.4-alpine
RUN mkdir /app
WORKDIR /app
COPY ./src/backend/services/api.gateway ./
#VOLUME [ "/src/backend/services/api.gateway:/app" ]
RUN npm install
#RUN npm install -g nodemon
EXPOSE 8080 9876
CMD [ "npm", "start" ]