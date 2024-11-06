# Use the official Node.js LTS (Long Term Support) image based on Alpine Linux 3.17
# FROM node:lts-alpine3.17

# # Set the working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Copy package.json and package-lock.json to the working directory
# #COPY frontend/package*.json frontend/
# COPY app/package*.json app/


# # Install Node.js dependencies for frontend (Client) and backend (Server)
# RUN npm run install-both

# # Copy all file to the container
# COPY . ./

# # Build the production version of the React.js frontend code
# RUN npm run build --prefix frontend

# # Change the user to 'node' for security reasons (avoid running as root)
# USER node

# # Expose port 5000 
# EXPOSE ${PORT}

# CMD ["npm","run","start-server"]

# Use the official Node.js LTS (Long Term Support) image based on Alpine Linux 3.17
FROM node:lts-alpine3.17

# Set the working directory for the backend inside the container
WORKDIR /app

# Copy backend package.json and package-lock.json to the container's working directory
COPY ./server/package*.json ./

# Install Node.js dependencies for the backend (Server)
RUN npm install

# Copy frontend package.json and package-lock.json to the container's frontend directory
COPY ./app/package*.json /frontend/

# Install Node.js dependencies for the frontend (Client)
RUN npm install --prefix /frontend

# Copy all files from the local machine to the container
COPY . ./

# Build the production version of the React.js frontend code
RUN npm run build --prefix /frontend

# Change the user to 'node' for security reasons (avoid running as root)
USER node

# Expose the necessary port for the backend (default to 5000, change as needed)
EXPOSE 5000

# Run the backend server (adjust if needed based on your actual entry point)
CMD ["npm", "run", "start-server"]


