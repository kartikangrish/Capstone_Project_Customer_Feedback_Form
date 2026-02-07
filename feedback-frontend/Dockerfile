# Stage 1: Build the Angular App
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --configuration=production

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/feedback-frontend/browser /usr/share/nginx/html
# You might need a simple nginx.conf to handle Angular routing
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]