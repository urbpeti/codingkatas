FROM node:14-alpine3.11

WORKDIR /src

COPY package.json package-lock.json ./
RUN npm install

COPY ./src /src

CMD ["npm", "test"]