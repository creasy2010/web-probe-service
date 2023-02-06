import AbsBaseTask from "./abs-base-task";
import {loadPageSource} from "../util/http";
import assert from 'node:assert/strict';
import {IZPWSGitHubRepo} from "../api/ZPWSGitHubRepo";
import {sleep} from "../index";
import {toFanyiUrl} from "../util/youdaofanyi";
import api from "../api";
import LocalStorage from "../service/local-storage";
import buildTask from "./task-build";
import {getCurrentWeek} from "../util/date";

/**
 * 从三个静态页面采集指标数据,
 * 示例:
 * https://github.com/fathyb/carbonyl
 * https://github.com/fathyb/carbonyl/issues?q=
 * https://github.com/fathyb/carbonyl/pulls?q=
 */
export default class SGithubIndAll extends AbsBaseTask {
    key="SGithubIndAll";

    gitUrl:string;

    constructor() {
        super();
    }

    async run(): Promise<void> {
        // todo dong 2023/2/4 分级处理
        let totalCount =await api.gitHubRepo.queryTotalCount();
        let totalPage=Math.ceil( totalCount/100);
        const key ='s-github::pageIndex'
        let pageIndex=LocalStorage.getItem(key)||0;
        let constNum=pageIndex*100;
        while(pageIndex++<totalPage){
            let result =await api.gitHubRepo.query({
                page:pageIndex,
                count:100,
                colCondition:{
                    '@order':'addDate+'
                }
            });

            for (let j = 0, jLen = result.data.length; j < jLen; j++) {
                try {
                    let resultElement = result.data[j];
                    if (resultElement.lastIndProbeDate) {
                        let lastIndProbeDate = new Date(resultElement.lastIndProbeDate);
                        let curWeekRange = getCurrentWeek();
                        if (curWeekRange.startDate > lastIndProbeDate) {
                            console.info(`${new Date().toLocaleTimeString()} src/index.ts:git指标采集():开始采集${++constNum}/${totalCount}`,  resultElement.id, resultElement.name);
                            await buildTask('SGithub', resultElement).run();
                        } else {
                            console.info(`${new Date().toLocaleTimeString()} src/index.ts:git指标采集():北周已采集 忽略`, resultElement.id, resultElement.name, resultElement.lastIndProbeDate.toLocaleDateString());
                        }
                    } else {
                        console.info(`${new Date().toLocaleTimeString()} src/index.ts:git指标采集():开始采集${++constNum}/${totalCount}`, resultElement.id,  resultElement.name);
                        await buildTask('SGithub', resultElement).run();
                    }
                } catch (err) {
                    console.warn("方法:", err);
                }
                // 更新采集时间
            }
            LocalStorage.setItem(key,pageIndex);
        }
    }
}