FROM node

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY next.config.js ./next.config.js

COPY pages ./pages
COPY public ./public
COPY styles ./styles
COPY components ./components
COPY config ./config
COPY lib ./lib

CMD ["npm", "dev"]