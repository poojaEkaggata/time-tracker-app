# FROM node:slim
# WORKDIR /app
# COPY . /app
# RUN npm install
# EXPOSE 8081
# CMD npm start
#FROM node:14
# FROM node:slim
# WORKDIR /user/src/app
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 8082
# CMD ["npm", "start"]
# FROM node:14-alpine
# WORKDIR /ekaggata-timesheet-mgt/back-end/
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 8082
# CMD ["node", "server.js","npm","start"]
# FROM node:14
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# CMD ["node", "server.js"]
# FROM node:16
# WORKDIR /back-end
# COPY package.json .
# RUN npm install
# COPY . .
# CMD npm start
# Use an official Node runtime as a parent image
FROM node:16
# Set the working directory in the container
WORKDIR /back-end
# Copy package.json and package-lock.json
COPY package*.json ./
# Install any needed packages
RUN npm install
# Bundle app source
COPY . .
# Make port available to the world outside this container
EXPOSE 8081
# Run the app when the container launches
CMD npm start
