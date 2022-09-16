FROM node:16
ENV key=value
RUN mkdir /home/my_app
WORKDIR /home/my_app
COPY . .
RUN npm install
EXPOSE 3002
CMD [ "npm","run","nodemon" ]
