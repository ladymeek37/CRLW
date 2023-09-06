FROM --platform=linux/amd64 node:14.20.1-alpine3.15 as build
WORKDIR /app
COPY package*.json .
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build

FROM --platform=linux/amd64 nginx:stable-alpine
COPY custom-nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]