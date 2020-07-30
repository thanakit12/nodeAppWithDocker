FROM node:alipine

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install

COPY ./ ./usr/src/app

EXPOSE 3000

CMD ["npm","start"] 

