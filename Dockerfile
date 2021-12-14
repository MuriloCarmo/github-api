FROM node:16.13.1

WORKDIR /app

COPY package*.json ./

RUN npm i -g @adonis/cli && npm i @adonisjs/ignitor
RUN npm i -g nodemon -D
RUN npm install

COPY . .
EXPOSE 3333

CMD ["npm", "run", "dev"]
