FROM node:10-alpine

WORKDIR /usr/src/app

COPY src/package*.json ./
RUN npm install
COPY ./src/index.js ./index.js
COPY ./src/schema ./schema
EXPOSE 4000

CMD ["index.js"]
