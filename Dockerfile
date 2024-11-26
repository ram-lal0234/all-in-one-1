# Step 1: Use Node.js to build the Angular app
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire Angular project
COPY . .

# Build the Angular app in production mode
RUN npm run build -- --configuration production

# Step 2: Use nginx to serve the Angular app
FROM nginx:1.25-alpine

# Copy the built Angular app from the previous step
COPY --from=build /usr/src/app/dist/all-in-one /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
