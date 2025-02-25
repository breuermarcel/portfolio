FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN if [ -f package-lock.json ]; then npm ci; fi

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]