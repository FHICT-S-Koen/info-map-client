FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npm", "start:prod"]
