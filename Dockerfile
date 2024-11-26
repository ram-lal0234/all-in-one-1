# Step 1: Build the Angular app
FROM node:18-alpine AS build

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the Angular project source files
COPY . .

# Build the app for production
RUN npm run build -- --configuration production

# Step 2: Serve the Angular app with Nginx
FROM nginx:1.25-alpine

# Copy the built Angular app to the Nginx server's html directory
COPY --from=build /usr/src/app/dist/all-in-one/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
