FROM mhart/alpine-node:8.11.4
RUN apk add --no-cache bash
WORKDIR /client
COPY package*.json /client/
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
