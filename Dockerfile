# nginx is a lightweight web server — perfect for serving plain HTML/CSS/JS
FROM nginx

# Remove nginx's default "Welcome" page so it doesn't clash with ours
RUN rm -rf /usr/share/nginx/html/*

# Copy our site files into the folder nginx serves by default
COPY . /usr/share/nginx/html/

# Nginx listens on port 80 — this just documents that for anyone reading the file
EXPOSE 80

# Keep nginx running in the foreground so the container doesn't exit immediately
CMD ["nginx", "-g", "daemon off;"]