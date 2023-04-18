FROM node:16.19.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install cors

COPY . .

EXPOSE 5000

CMD ["npm", "start"]