import AbsBaseTask from "./abs-base-task";
import {loadPageSource} from "../util/http";
import assert from 'node:assert/strict';
import {IZPWSGitHubRepo} from "../api/ZPWSGitHubRepo";
import {sleep} from "../index";
import {toFanyiUrl} from "../util/youdaofanyi";
import api from "../api";

/**
 * 从三个静态页面采集指标数据,
 * 示例:
 * https://github.com/fathyb/carbonyl
 * https://github.com/fathyb/carbonyl/issues?q=
 * https://github.com/fathyb/carbonyl/pulls?q=
 */
export default class SGithub extends AbsBaseTask {
    key="SGithub";

    gitUrl:string;

    constructor(public taskInfo:IZPWSGitHubRepo ) {
        super();
        this.gitUrl= 'https://github.com/'+taskInfo.name;
    }

    async run(): Promise<void> {
        console.info(`${new Date().toLocaleTimeString()} src/task/s-github.ts:run():`,);
     // let [basic,pr,iss]=   await Promise.all([this.getFirstPage(),this.getPrPage(),this.getIssuePage()])
       let basic =await this.getFirstPage();
       // await sleep(1000);
       let pr = await this.getPrPage();
       // await sleep(1000);
       let iss = await this.getIssuePage();

        console.info(`${new Date().toLocaleTimeString()} src/task/s-github.ts:run():done`, this.taskInfo.name,JSON.stringify({
            ...basic,
            ...pr,
            ...iss,
        }));

        await api.gitHubRepoInd.add({
            userId:38710,
            repoId:this.taskInfo.id,
            watchInd: basic.watchInd,
            starInd: basic.starInd,// start人数:
            forkInd: basic.forkInd,// fork人数:
            contributorInd: basic.contributorInd,// 参与贡献人数:
            prOpen: pr.prOpen,// openPr数量:
            prClosed: pr.prClosed,// closePr数量:
            issueClosed: iss.issueClosed,// 关闭问题数量:
            issueOpen: iss.issueOpen,// 开启问题数量:
        });
        api.gitHubRepo.update({
            id:this.taskInfo.id,
            starts:basic.starInd,
            lastIndProbeDate:new Date(),
            languages:basic.Languages,
        })
        return Promise.resolve(undefined);
    }
    async uploadData(){
        //上传指标数据;

    }


    async getFirstPage() {
        let watchInd, starInd, forkInd, contributorInd, Languages, issueInd, issueOpenInd, issueCloseInd, prInd,
            prOpenInd, prCloseInd;
        // https://github.com/fathyb/carbonyl/issues?q=
        // https://github.com/fathyb/carbonyl/pulls?q=
        let resulto = await loadPageSource(toFanyiUrl(this.gitUrl),{tryCount:3,waitTime:15000});
        if (resulto.data) {
            let watchStr = getSniptHtml('Watchers</h3>', resulto.data, {
                afterFlag: "watching"
            });
            assert.strictEqual(watchStr.length, 1);
            watchInd = parseInt(watchStr[0].match(/strong>(\d+)/)[1].replace(',', ""));
            let starStr = getSniptHtml('repo-stars-counter-star', resulto.data, {
                afterFlag: "</span>"
            })
            assert.strictEqual(starStr.length, 1);
            starInd = parseInt(starStr[0].match(/title="([\d,]+)"/)[1].replace(',', ""));

            let forkStr = getSniptHtml('repo-network-counte', resulto.data, {
                afterFlag: "</span>"
            });
            assert.strictEqual(forkStr.length, 1);
            forkInd = parseInt(forkStr[0].match(/title="([\d,]+)"/)[1].replace(',', ""));
            // languagesStr[0].match(/\\>(.*)<\/span>.*<span>(.*)<\//)
            let languagesStrs = getSniptHtml('color-fg-default text-bold mr-1', resulto.data, {
                afterFlag: "</a>"
            });
            // assert.strictEqual(languagesStrs.length > 0, true);
            let Languages = languagesStrs.reduce((acc, next) => {
                let matchResult = next.match(/>(.*)<\/span>[\s\S]*<span>(.*)<\/span/)
                acc.push({
                    language: matchResult[1],
                    proportion: parseFloat(matchResult[2].replace("%",""))
                })
                return acc;
            }, []);

            let contributorStr = getSniptHtml('repo-network-counte', resulto.data, {
                afterFlag: "</span>"
            });
            assert.strictEqual(contributorStr.length, 1);
            contributorInd = parseInt(contributorStr[0].match(/title="([\d,]+)"/)[1].replace(',', ""));
            return {
                watchInd, starInd, forkInd, Languages, contributorInd
            }
        }
    }

    async getIssuePage() {
        // https://github.com/fathyb/carbonyl/issues?q=
        let resulto = await loadPageSource(toFanyiUrl(this.gitUrl + "/issues?q="),{tryCount:3,waitTime:15000});
        if (resulto.data) {
            let issueStr = getSniptHtml('table-list-header-toggle states flex-auto pl-0', resulto.data, {
                afterFlag: "</div>"
            });

            let matchresult = issueStr[0].match(/<\/svg> ([\s\S]+) Open[\s\S]* ([\s\S]+) Closed/)
            assert.strictEqual(issueStr.length >= 1, true);
            return {
                issueOpen: parseInt(matchresult[1].replace(",","")),
                issueClosed: parseInt(matchresult[2].replace(",",""))
            }
            // watchInd = watchStr[0].match(/strong>(\d+)/)[1];
        }
    }


    async getPrPage() {
        // https://github.com/fathyb/carbonyl/pulls?q=
        let resulto = await loadPageSource(toFanyiUrl(this.gitUrl + "/pulls?q="),{tryCount:3,waitTime:15000});
        if (resulto.data) {
            let prStr = getSniptHtml('table-list-header-toggle states flex-auto pl-0', resulto.data, {
                afterFlag: "</div>"
            });
            if(prStr.length==0){
                debugger;
            }
            assert.strictEqual(prStr.length >= 1, true);
            let matchresult = prStr[0].match(/(\d+) Open[\s\S]* ([\s\S]+) Closed/)
            assert.strictEqual(prStr.length >= 1, true);
            if(!matchresult){
                debugger;
            }
            return {
                prOpen: parseInt(matchresult[1].replace(",","")),
                prClosed: parseInt(matchresult[2].replace(",",""))
            }
            debugger;
            // watchInd = watchStr[0].match(/strong>(\d+)/)[1];
        }
    }

}

function getSniptHtml(flag: string | RegExp, html: string, param: {
    afterFlag?: string;
    before?: number,
    after?: number,
} = {before: 0, after: 200}): string[] {
    let flagIndex, result = [], positionIndex = -1;
    if(!html || typeof html != "string"){
        debugger;
    }

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
