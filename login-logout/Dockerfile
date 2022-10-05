FROM node:alpine 
RUN mkdir /home/my_app
WORKDIR /home/my_app
COPY . .
RUN npm install
EXPOSE 3003
CMD [ "npm","run","nodemon" ]

