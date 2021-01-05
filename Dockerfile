FROM node:alpine

RUN mkdir /app
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY index.js index.js
RUN npm i
CMD node index.js