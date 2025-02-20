FROM node:22
WORKDIR /backend
COPY package.json /backend/
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node","server.js"]
