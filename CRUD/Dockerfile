FROM node:alpine 
RUN mkdir /home/my_app
WORKDIR /home/my_app
COPY . .
RUN npm install
EXPOSE 3001
CMD [ "npm","run","nodemon" ]

