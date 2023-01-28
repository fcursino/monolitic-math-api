FROM node:18-alpine3.15

RUN mkdir /app/

WORKDIR /app

COPY package.json ./

COPY . .

RUN npm install

EXPOSE 5000

CMD ["npm", "run", "dev"]