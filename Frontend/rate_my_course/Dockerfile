# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the Docker container
WORKDIR /app/frontend/

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of the application's code to the working directory
COPY . ./

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define the command to run the app using npm
CMD ["npm", "start"]
