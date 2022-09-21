FROM node

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY next.config.js ./next.config.js

CMD bash -c "npm run dev"