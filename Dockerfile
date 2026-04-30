FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# Use the official Nginx template support to handle the $PORT environment variable.
# Create the templates directory and write the template file.
RUN mkdir -p /etc/nginx/templates && printf "server {\n  listen \${PORT};\n  location / {\n    root /usr/share/nginx/html;\n    index index.html;\n    try_files \$uri \$uri/ /index.html;\n  }\n}\n" > /etc/nginx/templates/default.conf.template



