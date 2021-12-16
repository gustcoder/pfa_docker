FROM node:17-alpine3.12

RUN apk add bash

WORKDIR /var/www/pfa

CMD [ "tail", "-f", "/dev/null" ]