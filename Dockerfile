FROM node:14 as depmanager

WORKDIR /opt/lab

COPY package.json ./

COPY package-lock.json ./

RUN npm ci

FROM node:14 as builder

WORKDIR /opt/lab

COPY src/ /opt/lab/src
COPY package-lock.json ./
COPY package.json ./
COPY angular.json ./
COPY tsconfig.app.json ./
COPY tsconfig.json ./
COPY tsconfig.spec.json ./
COPY --from=depmanager /opt/lab/node_modules /opt/lab/node_modules

RUN npm run build -- --prod --base-href /vaaas/ #kubernetes version
# RUN npm run build -- --prod #docker-compose version

FROM nginx:1.17.0-alpine
COPY ngx/default.conf /etc/nginx/conf.d/
COPY --from=builder /opt/lab/dist/lastVAaaS /usr/share/nginx/html

