FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Expose port for service
EXPOSE 3000

# Install and configure `serve`.
RUN npm install -g serve

# Copy source code to image
COPY . .

# Install dependencies
RUN npm install

#permission
RUN chmod 777 run

# Build app and start server from script
CMD ["/usr/src/app/run"]