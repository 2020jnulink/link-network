FROM node:12.2.0-alpine

ENV NODE_ENV production
 ENV PORT 3000
 ENV DOCKER_SOCKET_PATH /host/var/run/docker.sock
 ENV DOCKER_CCENV_IMAGE hyperledger/fabric-ccenv:1.4

RUN mkdir /app
COPY . /app
WORKDIR /app


ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install 
RUN npm install react-scripts@3.4.1 -g

# RUN ["/bin/bash", "-c", "###############################Done##########################"]
# RUN npm start
# RUN ["/bin/bash", "-c", "###############################Done##########################"]

# EXPOSE 3000
CMD ["npm", "start"]