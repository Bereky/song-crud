# parent image
FROM node:18

# working directory
WORKDIR /app

# Copy package.json and Install app dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 8400

# Define the command to run your app
CMD ["npm", "start"]
