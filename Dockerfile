# Use the official Node 18 image (or any newer node version you like)
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json (if you have one)
COPY package.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Default command
CMD ["npm", "start"]
