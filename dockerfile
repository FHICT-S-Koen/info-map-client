FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm ci
RUN npm install -g serve

COPY . .

ENV REACT_APP_AUTH0_DOMAIN=${secrets.REACT_APP_AUTH0_DOMAIN}
ENV REACT_APP_AUTH0_CLIENT_KEY=${secrets.REACT_APP_AUTH0_CLIENT_KEY}
ENV REACT_APP_AUTH0_AUDIENCE=${secrets.REACT_APP_AUTH0_AUDIENCE}

RUN npm run build

CMD ["serve", "-s", "build"]
