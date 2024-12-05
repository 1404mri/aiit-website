FROM node:18

WORKDIR /var/www

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "server"]
