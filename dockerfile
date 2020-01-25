#choose your base image
FROM node:alpine

#specify working directory
WORKDIR /usr/redis_node

#copy files to the new docker working directory

COPY ./ ./

#install dependencies

RUN  npm install

#specify the commands to run at startup

CMD ["npm", "start"]