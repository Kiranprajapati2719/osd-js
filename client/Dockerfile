# image
FROM node:10-alpine

# create app directory
RUN mkdir -p /usr/app/client
WORKDIR /usr/src/app/client

# copy package.json and lock file
COPY package*.json ./

# production install
RUN npm install --silent
COPY . .

# run command
CMD [ "npm", "start" ]
