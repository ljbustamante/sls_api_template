ARG NODEJS_VERSION
FROM node:${NODEJS_VERSION}-slim

WORKDIR /home/node/app
COPY ../../docker/node/command.sh /home
RUN npm install -g serverless
RUN npm install
RUN apt-get update
RUN apt-get install mariadb-client -y
EXPOSE 3000
# Siempre lanzar los servicios en la IP 0.0.0.0 para que sean accesibles desde el host
CMD sls offline start -o 0.0.0.0