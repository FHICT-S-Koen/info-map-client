FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm ci
RUN npm run build

COPY . .

CMD ["npm", "start:prod"]
