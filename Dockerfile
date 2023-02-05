FROM --platform=linux/amd64  ghcr.io/puppeteer/puppeteer:latest

# RUN apt-get update  -y && apt-get install -y git  &&  apt-get install -y vim
# RUN sudo npm install -g typescript --registry https://registry.npm.taobao.org &&   npm install -g ts-node --registry https://registry.npm.taobao.org &&  npm install cnpm -g --registry https://registry.npm.taobao.org &&  npm install -g npm-cli-adduser --registry https://registry.npm.taobao.org&&  npm install -g prettier --registry https://registry.npm.taobao.org

WORKDIR /usr/workbench/
COPY package*.json .
RUN npm install --registry https://registry.npm.taobao.org   #NODE_ENV=production
# RUN NODE_ENV=production npm install yauzl@2.10.0 @babel/helper-plugin-utils@7.8.3  @babel/preset-typescript@7.8.3 @babel/helper-annotate-as-pure@7.8.3
ENV Testetset = testset1
COPY ./ ./
#RUN #git config --global init.defaultBranch master && git config --global user.email "coder.yang2010@gmail.com" &&git config --global init.defaultBranch master && git config --global user.email "coder.yang2010@gmail.com" &&  git config --global user.name "yangxiaodong"
# RUN cd /usr/src/moon/app/okrtemp/app/ && git init && git add . && git commit -m "init" &&cd /usr/src/moon/app/okrtemp/bff/ && git init && git add . && git commit -m "init" && cd /usr/src/moon/app/okrtemp/common/ && git init && git add . && git commit -m "init" &&cd /usr/src/moon/app/okrtemp/component/ && git init && git add . && git commit -m "init" &&cd /usr/src/moon/app/okrtemp/framework/ && git init && git add . && git commit -m "init" &&cd /usr/src/moon/app/okrtemp/pbff/ && git init && git add . && git commit -m "init"
#CMD [ "ts-node","--project","./app/tsconfig.json","./src/cli-execute.ts"]
#CMD [ "java",'-version']
CMD [ "npm","run","start:Prod"]

#CMD [ "which",'node']
#CMD [ "ls","-l","./src"]
#CMD [ "ts-node","./src/cli-execute.ts"]
