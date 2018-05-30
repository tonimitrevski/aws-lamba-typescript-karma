FROM node:8.11.1
RUN apt-get update
RUN npm install -g serverless@1.27.2
WORKDIR /serverless