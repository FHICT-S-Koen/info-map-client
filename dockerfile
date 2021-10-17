FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm ci
RUN npm i @craco/craco

COPY . .

CMD ["npm", "start"]
