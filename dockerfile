FROM node:22-slim
WORKDIR /front
COPY ./src/package*.json ./src/
WORKDIR /front/src
RUN npm i
CMD [ "npm", "run", "dev" ]