FROM  node:8-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./package.json ./package.json

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

EXPOSE 80
# Serve the app
CMD ["npm","start"]

