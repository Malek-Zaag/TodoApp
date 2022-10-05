FROM node:alpine 
RUN mkdir  /home/my_app
WORKDIR /home/my_app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm","run","start"]