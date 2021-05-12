FROM node AS build
WORKDIR /tmp
COPY package*.json /tmp/
RUN npm ci --only=production
COPY . .
RUN node convert-slides.js
RUN rm -rf node_modules/ convert-slides.js .dockerignore package.json package-lock.json
RUN find . -name "*.adoc" -type f -delete

FROM nginx AS deploy
COPY --from=build /tmp/ /usr/share/nginx/html
