FROM node:18.17.1

WORKDIR /app

COPY package*.json .

RUN npm install --omit=dev

COPY . .

RUN npm run build

EXPOSE 9000

CMD [ "node", "server.js" ]