# ===== Build STAGE =====
FROM node:18-alpine AS builder
WORKDIR /app

# Copy only package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy only project files (NO node_modules)
COPY public ./public
COPY src ./src

# Build project
RUN npm run build

# ===== Serve STAGE =====
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
