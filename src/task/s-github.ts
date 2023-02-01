import AbsBaseTask from "./abs-base-task";
import {loadPageSource} from "../util/http";
import assert from 'node:assert/strict';

/**
 * 未登录场景下采集数据信息;
 */
export default class SGithub extends AbsBaseTask {

    constructor(public taskInfo: {
        github: string;
    }) {
        super();
    }

    async run(): Promise<void> {
        console.info(`${new Date().toLocaleTimeString()} src/task/s-github.ts:run():`,);
        let result = await Promise.all([
            this.getPrPage(),
            this.getIssuePage(),
            this.getFirstPage(),
        ]);
        console.info(`${new Date().toLocaleTimeString()} src/task/s-github.ts:run():done`, result);
        return Promise.resolve(undefined);
    }

    async getFirstPage() {
        let watchInd, starInd, forkInd, contributorInd, Languages, issueInd, issueOpenInd, issueCloseInd, prInd,
            prOpenInd, prCloseInd;
        // https://github.com/fathyb/carbonyl/issues?q=
        // https://github.com/fathyb/carbonyl/pulls?q=
        let resulto = await loadPageSource(this.taskInfo.github);
        if (resulto.data) {
            let watchStr = getSniptHtml('/fathyb/carbonyl/watchers', resulto.data, {
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
            assert.strictEqual(languagesStrs.length > 0, true);
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
            contributorInd = contributorStr[0].match(/title="([\d,]+)"/)[1].replace(',', "");
            return {
                watchInd, starInd, forkInd, Languages, contributorInd
            }
        }
    }

    async getIssuePage() {
        // https://github.com/fathyb/carbonyl/issues?q=
        let resulto = await loadPageSource(this.taskInfo.github + "/issues?q=");
        if (resulto.data) {
            let issueStr = getSniptHtml('table-list-header-toggle states flex-auto pl-0', resulto.data, {
                afterFlag: "</div>"
            });

            let matchresult = issueStr[0].match(/(\d+) Open[\s\S]* (\d+) Closed/)
            assert.strictEqual(issueStr.length >= 1, true);
            return {
                issueOpen: matchresult[1],
                issueClosed: matchresult[2]
            }
            // watchInd = watchStr[0].match(/strong>(\d+)/)[1];
        }
    }


    async getPrPage() {
        // https://github.com/fathyb/carbonyl/pulls?q=
        let resulto = await loadPageSource(this.taskInfo.github + "/pulls?q=");
        if (resulto.data) {
            let prStr = getSniptHtml('table-list-header-toggle states flex-auto pl-0', resulto.data, {
                afterFlag: "</div>"
            });
            assert.strictEqual(prStr.length >= 1, true);
            let matchresult = prStr[0].match(/(\d+) Open[\s\S]* (\d+) Closed/)
            assert.strictEqual(prStr.length >= 1, true);
            return {
                prOpen: matchresult[1],
                prClosed: matchresult[2]
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
