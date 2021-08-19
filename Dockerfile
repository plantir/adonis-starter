FROM node:12
WORKDIR /usr/src/app
COPY . .
ENV PORT 3333
ENV HOST 0.0.0.0
RUN yarn
RUN node ace migration:run --force
EXPOSE 3333