FROM node:18
WORKDIR /app
ADD . /app
RUN npm install --production
EXPOSE 3000
CMD npm start