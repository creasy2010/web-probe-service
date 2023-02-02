import AbsBaseTask from "./abs-base-task";
import {loadPageSource} from "../util/http";
import assert from 'node:assert/strict';
import * as path from  'path';
import * as fse from  'fs-extra';
import {sleep} from "../index";

let filePath =path.join(__dirname,"../../existRepo.json")
const repoList:string[]  =fse.readJSONSync(filePath);

const minitueUnit = 60*1000;
const sleepTimePerReq=0.5*minitueUnit;
const searbegTime = '2020-01-01';

/**
 * 获取github库信息;
 * 搜索条件构造;
 * https://github.com/search/advanced
 */
export default class SGithubRepoList extends AbsBaseTask {

    constructor(public taskInfo: {
        // github: string;
    }) {
        super();
    }

    async run(): Promise<void> {
        console.info(`${new Date().toLocaleTimeString()} src/task/s-github-repo-list.ts:run():`, );
        // 这个数据入库;
        for (let startStar = 100 ;startStar < 10000; startStar++) {
            try {
                let items = await this.getAllRepoList({
                    fromStart: startStar,
                    toStart: startStar + 1
                });
                for (let i = 0, iLen = items.length; i < iLen; i++) {
                    let item = items[i];
                    if (!repoList.includes(item)) {
                        // console.info(`${new Date().toLocaleTimeString()} src/task/s-github-repo-list.ts:run():新增库`, item);
                        repoList.push(item);
                    }
                }
                console.info(`${new Date().toLocaleTimeString()} src/task/s-github.ts:run():done: startStar:${startStar}`, repoList.join(','));
            } catch (err) {
                console.warn("方法:run", err);
            }
        }
        return Promise.resolve(undefined);
    }

    async getAllRepoList(condition:{
        fromStart?:number;
        toStart?:number;
    }):Promise<string[]>{
        let results:string[] = [];
        // https://github.com/fathyb/carbonyl/issues?q=
        // https://github.com/fathyb/carbonyl/pulls?q=
        //时间范围的
        // https://github.com/search?q=created%3A%3E2020-01-01+created%3A%3C2021-01-01+stars%3A100..500&type=Repositories&ref=advsearch&l=&l=
        let visitUrl =`https://github.com/search?q=stars%3A{condition.fromStart}..${condition.toStart}+pushed%3A%3E${searbegTime}&type=Repositories&ref=advsearch`
        // let visitUrl =`https://github.com/search?l=&o=desc&q=stars%3A${condition.fromStart}..${condition.toStart}&s=stars&type=Repositories`;
        // let visitUrl =`https://github.com/search?l=&o=desc&q=stars%3A500..1000&s=stars&type=Repositories`;
       console.info(`${new Date().toLocaleTimeString()} src/task/s-github-repo-list.ts:getAllRepoList():访问第一页`, visitUrl);
        let resulto = await loadPageSource(visitUrl,{tryCount:3,waitTime:minitueUnit});
        if (resulto.data) {
            let totalStr = getSniptHtml('repository results', resulto.data, {
                before: 30,
                after:20
            });
            assert.strictEqual(totalStr.length, 1);

            let totalCount = parseInt( totalStr[0].match(/h3>([\s\S]*)repository results/)[1].trim().replaceAll(",",""));
            results=results.concat(extraRepoList(resulto.data));
            let totalPage =totalCount/10;
            if(totalPage>100) {
                console.warn(`${new Date().toLocaleTimeString()} src/task/s-github-repo-list.ts:getAllRepoList():页面数量超过100`, totalPage,visitUrl);
            }
            for (let i = 2; i <= totalPage+1; i++) {
                await  sleep(sleepTimePerReq);
                console.info(`${new Date().toLocaleTimeString()} src/task/s-github-repo-list.ts:getAllRepoList():准备获取分页 ${i}/${totalPage}`, visitUrl);
                if(i>100) {
                    break;
                }
                let pageVisitUrl =visitUrl+'&p='+i;
                try {
                    results = results.concat(extraRepoList((await loadPageSource(pageVisitUrl,{tryCount:3,waitTime:sleepTimePerReq})).data));
                } catch (err) {
                    console.warn("方法:getAllRepoList", pageVisitUrl,err);
                }
            }
        }
        return results;
        // 36,433 repository results
    }
}

function extraRepoList(pageContent:string) {
    let items = getSniptHtml('mt-n1 flex-auto', pageContent, {
        afterFlag: "</a>"
    });
    return items.map(item=>item.match(/href="(.*)"/)[1]);
}

function getSniptHtml(flag: string | RegExp, html: string, param: {
    afterFlag?: string;
    before?: number,
    after?: number,
} = {before: 0, after: 200}): string[] {
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
