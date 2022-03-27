# Semms Luxury Docker configuration

FROM node:16 as base
WORKDIR /semms
COPY package.json /semms
RUN yarn install
COPY . /semms
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]