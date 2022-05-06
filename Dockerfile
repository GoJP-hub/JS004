FROM node:18-alpine

COPY ./ ./
WORKDIR /home/gohirano/APPL_DEV/JS_004/src

RUN apk update \
    && apk add bash \
    && apk add git