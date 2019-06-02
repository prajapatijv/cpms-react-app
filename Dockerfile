FROM node:8.16-jessie


# Create App Directory
WORKDIR /cpms-react-app

# Install dependencies
COPY package*.json ./

RUN npm install

COPY . /cpms-react-app

EXPOSE 3000

CMD [ "npm", "start" ]