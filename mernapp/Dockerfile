FROM node:16.19.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --verbose

COPY . .

EXPOSE 3000 

CMD ["npm", "start"]
# hello