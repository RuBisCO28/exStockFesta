FROM node:lts-alpine

ENV ROOT="/frontend"
ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

WORKDIR ${ROOT}
COPY package.json ${ROOT}
COPY package-lock.json ${ROOT}
COPY webpack.config.js ${ROOT}

RUN npm install -D webpack webpack-cli babel-loader @babel/core @babel/preset-env css-loader file-loader mini-css-extract-plugin sass-loader vue-loader@15 vue-style-loader vue-template-compiler webpack-manifest-plugin webpack-dev-server

CMD ["npm", "run", "start"]