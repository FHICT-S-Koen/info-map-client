FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm ci
RUN npm install -g serve

COPY . .

RUN npm run build

CMD ["serve", "-s", "build"]
