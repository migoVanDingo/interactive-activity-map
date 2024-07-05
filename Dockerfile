FROM node:22-alpine

WORKDIR /app

COPY package.json .

RUN npm install
RUN npm install @fortawesome/fontawesome-svg-core
RUN npm install @fortawesome/free-solid-svg-icons
RUN npm install @fortawesome/react-fontawesome
RUN npm install @fortawesome/free-regular-svg-icons
RUN npm install @reduxjs/toolkit

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "dev" ]