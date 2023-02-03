import AbsBaseTask from "./abs-base-task";
import {loadPageSource} from "../util/http";
import assert from 'node:assert/strict';
import * as path from  'path';
import * as fse from  'fs-extra';
import {sleep} from "../index";
import {toFanyiUrl} from "../util/youdaofanyi";
import LocalStorage from "../service/local-storage";

let filePath =path.join(__dirname,"../../existRepo.json")
let repoList:string[]  =fse.readJSONSync(filePath);
let newAddList = [];

const minitueUnit = 60*1000;
const sleepTimePerReq=0.5*minitueUnit;
const searbegTime = new Date(new Date().getFullYear()-2,0,0);

const dayMsUnit=24 * 60 * 60 * 1000;

/**
 * 获取github库信息;
 * 搜索条件构造;
 * https://github.com/search/advanced
 */
export default class SGithubRepoList extends AbsBaseTask {

    key="SGithubRepoList";

    constructor(public taskInfo: {
        // github: string;
    }) {
        super();
    }

    async run(): Promise<void> {
        console.info(`${new Date().toLocaleTimeString()} src/task/s-github-repo-list.ts:run():`, );
        // 这个数据入库;
        let now=new Date();
        const stepAdd =dayMsUnit;
        const starStep=100000;
        let isInit=true;
        function getCache(key:string,defaultVal?:any) {
            let _c=LocalStorage.getItem(key);
            if(_c) {
                return _c
            }else {
                return defaultVal;
            }
        }
        // https://github.com/search?q=created%3A2020-12-30+stars%3A20800..25800&type=Repositories&ref=advsearch

        // 7:17:40 PM src/task/s-github-repo-list.ts:getAllRepoList():访问第一页 https://github.com/search?q=created%3A2021-02-01+stars%3A800..1000&type=Repositories&ref=advsearch
        //     7:17:41 PM src/index.ts:sleep(): 30000
        // https://github.com/search?q=created%3A2023-02-01+stars%3A15800..20800&type=Repositories&ref=advsearch
        // ^C

        const startKey = this.key+'::startStar',dateKey=this.key+'::startDate';
        for (let date = isInit? new Date(getCache(dateKey,searbegTime.getTime())):searbegTime ; date.getTime() <= now.getTime(); date= new Date(date.getTime() + stepAdd)){
            LocalStorage.setItem(dateKey,date.getTime());
            console.info(`${new Date().toLocaleTimeString()} src/task/s-github-repo-list.ts:run():date`, date);
            let dateRange  = getFromToFromDate(date,stepAdd);
            // todo dong 2023/2/3 给定一个范围自己检测分区情况;
            for (let startStar = isInit? getCache(startKey,800):800 ;startStar < 100000; startStar+=starStep) {
                LocalStorage.setItem(startKey,startStar);
                isInit=false;
                try {
                    let items = await this.getAllRepoList({
                        fromStart: startStar,
                        toStart: startStar + starStep,
                        createdAt:dateRange.from,
                        // dateRange
                    });
                    for (let i = 0, iLen = items.length; i < iLen; i++) {
                        let item = items[i];
                        if (!repoList.includes(item) && !newAddList.includes(item)) {
                            newAddList.push(item);
                        }
                    }
                    if(newAddList.length>0){
                     console.info(`${new Date().toLocaleTimeString()} src/task/s-github.ts:run():done: startStar:${startStar}`, newAddList.join(','));
                    }
                } catch (err) {
                    console.warn("方法:run", err);
                }
                try {
                   fse.writeJSONSync(filePath,repoList);
                    repoList=repoList.concat(newAddList)
                    newAddList=[];
                } catch (err) {
                }
                await  sleep(sleepTimePerReq,"date handle wait");
            }
        }
        console.info(`${new Date().toLocaleTimeString()} src/task/s-github-repo-list.ts:run():这就完事了`, );
        return Promise.resolve(undefined);
    }

    async getRepoList(createdAt?:string):Promise<string[]>{


        return  [];
    }


    async getAllRepoList(condition:{
        fromStart?:number;
        toStart?:number;
        createdAt?:string;//2020-01-01
        dateRange?:{
            from:string;//2020-01-01
            to:string;//2020-01-01
        }
    }):Promise<string[]>{
        let results:string[] = [];
        // https://github.com/fathyb/carbonyl/issues?q=
        // https://github.com/fathyb/carbonyl/pulls?q=
        //时间范围的
        let visitUrl =`https://github.com/search?q=stars%3A${condition.fromStart}..${condition.toStart}+pushed%3A%3E${searbegTime}&type=Repositories&ref=advsearch`
        if(condition.dateRange){
            visitUrl=`https://github.com/search?q=created%3A%3E${condition.dateRange.from}+created%3A%3C${condition.dateRange.to}+stars%3A${condition.fromStart}..${condition.toStart}&type=Repositories&ref=advsearch`
        }else if(condition.createdAt){
            visitUrl=`https://github.com/search?q=created%3A${condition.createdAt}+stars%3A${condition.fromStart}..${condition.toStart}&type=Repositories&ref=advsearch`
        }

        // visitUrl =`http://webtrans.yodao.com/server/webtrans/tranUrl?from=auto&to=auto&type=1&product=mdictweb&salt=1675327336162&sign=6ba56927ab49ce8e75946dd84dea7525&url=${encodeURI(visitUrl)}`
        // let visitUrl =`https://github.com/search?l=&o=desc&q=stars%3A${condition.fromStart}..${condition.toStart}&s=stars&type=Repositories`;
        // let visitUrl =`https://github.com/search?l=&o=desc&q=stars%3A500..1000&s=stars&type=Repositories`;
       console.info(`${new Date().toLocaleTimeString()} src/task/s-github-repo-list.ts:getAllRepoList():访问第一页`, visitUrl);
        let resulto = await loadPageSource(toFanyiUrl(visitUrl),{tryCount:3,waitTime:sleepTimePerReq});
        if (resulto.data) {
            let totalStr = getSniptHtml('repository results', resulto.data, {
                before: 30,
                after:20
            });
            if(totalStr.length===0){
                return results;
            }
            assert.strictEqual(totalStr.length, 1);

            let totalCount = parseInt( totalStr[0].match(/h3>([\s\S]*)repository results/)[1].trim().replaceAll(",",""));
            results=results.concat(extraRepoList(resulto.data));
            let totalPage =Math.ceil(totalCount/10);

            if(totalPage>100) {
                console.warn(`${new Date().toLocaleTimeString()} src/task/s-github-repo-list.ts:getAllRepoList():页面数量超过100`, totalPage,visitUrl);
            }
            for (let i = 2; i <= totalPage; i++) {
                await  sleep(sleepTimePerReq,'page request wait');
                console.info(`${new Date().toLocaleTimeString()} src/task/s-github-repo-list.ts:getAllRepoList():准备获取分页 ${i}/${totalPage}`, visitUrl);
                if(i>100) {
                    break;
                }
                let pageVisitUrl =visitUrl+ encodeURI('&p='+i);
                try {
                    results = results.concat(extraRepoList((await loadPageSource(toFanyiUrl(pageVisitUrl),{tryCount:3,waitTime:sleepTimePerReq})).data));
                } catch (err) {
                    console.warn("方法:getAllRepoList", pageVisitUrl,err);
                }
            }
        }
        console.info(`${new Date().toLocaleTimeString()} src/task/s-github-repo-list.ts:getAllRepoList():共获取数量:`, results.length);
        return results;
        // 36,433 repository results
    }
}

function extraRepoList(pageContent:string) {
    let items = getSniptHtml('mt-n1 flex-auto', pageContent, {
        afterFlag: "</a>"
    });
    // return items.map(item=>item.match(/href="(.*)"/)[1]);
    return items.map(item=>item.match(/">(.*)<\/a>/)[1]);
}

function getSniptHtml(flag: string | RegExp, html: string, param: {
    afterFlag?: string;
    before?: number,
    after?: number,
} = {before: 0, after: 200}): string[] {
    if(typeof html!="string"){
        console.warn(`getSniptHtml:html不是字符串`,html);
        return [];
    }
    if(!html){
        return  [];
    }
    let flagIndex, result = [], positionIndex = -1;

    function getNextFlagIndex() {
        if (typeof flag == "string") {
            return html.indexOf(flag, positionIndex + 1);
        } else {
        }
        return -1;
    }

    while ((flagIndex = getNextFlagIndex()) != -1) {
        let startIndex = flagIndex;
        if (param.before) {
            startIndex = flagIndex - param.before;
        }
        //截取逻辑;
        if (param.afterFlag) {
            let afterFlagIndex = html.indexOf(param.afterFlag, flagIndex);
            if (afterFlagIndex != -1) {
                result.push(html.substring(startIndex, afterFlagIndex + param.afterFlag.length));
            }
        } else if (param.after) {
            result.push(html.substring(startIndex, flagIndex + param.after));
        } else {
            throw new Error("param.afterFlag or param.after must be set one")
        }
        positionIndex = flagIndex;
    }


    return result;
    // let startInd = html.indexOf(flag);
    // let endInd = html.indexOf(flag,startInd+1);
    // if(startInd<0||endInd<0){
    //     return "";
    // }
    // startInd = startInd-param.before;
    // endInd = endInd+param.after;
    // return html.substring(startInd,endInd);
}


function getFromToFromDate(fromDate:Date,addms:number):{from:string;to:string} {
    return {
        from:fromDate.toISOString().split("T")[0],
        to:new Date(fromDate.getTime() + addms).toISOString().split("T")[0]
    }
}
