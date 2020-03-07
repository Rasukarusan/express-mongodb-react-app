FROM mhart/alpine-node:8.11.4
RUN apk add --no-cache bash
WORKDIR /api
COPY package*.json /api/
RUN npm install
EXPOSE 80
# mongoDBの起動を待つためのスクリプトを起動。npm startはdocker-compose.ymlに記述
# https://github.com/vishnubob/wait-for-it
COPY bin/wait-for-it.sh /usr/wait-for-it.sh
RUN chmod +x /usr/wait-for-it.sh