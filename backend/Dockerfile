# Use Node.js version 20 as the base image in top of docker
FROM node:20.16.0-alpine3.19

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install --quiet

# Copy the rest of the application files into docker image
COPY . .

#src file - .env.aws
#dest file - .env
#copy all contents from .env.aws -> .env
RUN ls -la && mv .env.aws .env


# Expose the application port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]

