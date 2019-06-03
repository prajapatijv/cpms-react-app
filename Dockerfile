FROM node:10.16.0

# Create App Directory
WORKDIR /cpms-react-app

# Install dependencies
COPY package*.json ./

RUN npm install

COPY . /cpms-react-app

EXPOSE 3000

CMD [ "npm", "start" ]