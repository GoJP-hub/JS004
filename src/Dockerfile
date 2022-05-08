FROM node:18-alpine
# WORKDIR /home/gohirano/APPL_DEV/JS_004
# COPY ./ ./
WORKDIR /workspace
COPY ./ ./
RUN apk update \
    && apk add bash \
    && apk add git