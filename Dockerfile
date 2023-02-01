FROM --platform=linux/amd64  timbru31/java-node:8-16
# 时区设置
RUN mkdir -p /usr/share/zoneinfo/Asia/
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    echo 'Asia/Shanghai' >/etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata
# 时区设置
ENV NODE_ENV = production DOCKER_FLAG = true TZ="Asia/Shanghai"

RUN apt-get update  -y && apt-get install -y git  &&  apt-get install -y vim
RUN npm install -g typescript --registry https://registry.npm.taobao.org &&   npm install -g ts-node --registry https://registry.npm.taobao.org &&  npm install cnpm -g --registry https://registry.npm.taobao.org &&  npm install -g npm-cli-adduser --registry https://registry.npm.taobao.org&&  npm install -g prettier --registry https://registry.npm.taobao.org
#RUN npm-cli-adduser -u 5f4b6db2e1cf498f37f7ff67 -p tpQKa83oHUxy -e 270048681@qq.com -r https://packages.aliyun.com/626e738f91fcf152ea071b1e/npm/npm-registry/
#RUN npm config set moon-:registry=https://packages.aliyun.com/626e738f91fcf152ea071b1e/npm/npm-registry/
#RUN npm config set java2ast-types:registry=https://packages.aliyun.com/626e738f91fcf152ea071b1e/npm/npm-registry/
#RUN npm config set ast-to-people-types:registry=https://packages.aliyun.com/626e738f91fcf152ea071b1e/npm/npm-registry/
WORKDIR /usr/workbench/
COPY package*.json .
RUN npm install --registry https://registry.npm.taobao.org   #NODE_ENV=production
# RUN NODE_ENV=production npm install yauzl@2.10.0 @babel/helper-plugin-utils@7.8.3  @babel/preset-typescript@7.8.3 @babel/helper-annotate-as-pure@7.8.3
ENV Testetset = testset1
COPY ./ ./
RUN git config --global init.defaultBranch master && git config --global user.email "coder.yang2010@gmail.com" &&git config --global init.defaultBranch master && git config --global user.email "coder.yang2010@gmail.com" &&  git config --global user.name "yangxiaodong"
# RUN cd /usr/src/moon/app/okrtemp/app/ && git init && git add . && git commit -m "init" &&cd /usr/src/moon/app/okrtemp/bff/ && git init && git add . && git commit -m "init" && cd /usr/src/moon/app/okrtemp/common/ && git init && git add . && git commit -m "init" &&cd /usr/src/moon/app/okrtemp/component/ && git init && git add . && git commit -m "init" &&cd /usr/src/moon/app/okrtemp/framework/ && git init && git add . && git commit -m "init" &&cd /usr/src/moon/app/okrtemp/pbff/ && git init && git add . && git commit -m "init"
#CMD [ "ts-node","--project","./app/tsconfig.json","./src/cli-execute.ts"]
#CMD [ "java",'-version']
EXPOSE 3000
#COPY ./okrtemp/destJSON.json /Users/dong/Falcon/moon/packages/core-backend/src/model-util/model-artisan/__tests__/destJSON.json
#CMD [ "node","./test.js"]
CMD [ "npm","run","start"]

#CMD [ "which",'node']
#CMD [ "ls","-l","./src"]
#CMD [ "ts-node","./src/cli-execute.ts"]
