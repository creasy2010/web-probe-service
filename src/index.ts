import puppeteer from 'puppeteer';
import {loadPageSource} from "./util/http";
import buildTask from "./task/task-build";
import SGithubRepoList from "./task/s-github-repo-list";
import api from "./api";
import LocalStorage from "./service/local-storage";

if(require.main === module ){
    (async () => {
        while(true){
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
                                console.info(`${new Date().toLocaleTimeString()} src/index.ts:git指标采集():忽略`, resultElement.id, resultElement.name, resultElement.lastIndProbeDate.toISOString());
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
            //采集单个库的;

            try {
                await new SGithubRepoList({}).run();
            } catch (err) {
                console.warn("方法:", err);
            }
        }


        const browser = await puppeteer.launch({
            headless:false
        });
        const page = await browser.newPage();

        page.on('response',async (response)=>{
            if(response.url()){
                try {
                    let text  = await   response.text();
                }catch (e){
                    console.warn(`${new Date().toLocaleTimeString()} src/index.ts:onResponse():getContent`, e);
                }
                // console.info(`${new Date().toLocaleTimeString()} src/index.ts:():`, text);
                // debugger;
            }
        });


        await page.goto('https://github.com/fathyb/carbonyl');

        // Set screen size
        await page.setViewport({width: 1080, height: 1024});

        let resulto  = await loadPageSource('https://github.com/fathyb/carbonyl');

        let ele  = await page.waitForSelector('#repo-stars-counter-star');
        console.info(`${new Date().toLocaleTimeString()} src/index.ts:():`, ele);
        debugger;
        await sleep(1000000);
        // Type into search box
        // await page.type('.search-box__input', 'automate beyond recorder');
        //
        // // Wait and click on first result
        // const searchResultSelector = '.search-box__link';
        // await page.waitForSelector(searchResultSelector);
        // await page.click(searchResultSelector);
        //
        //
        //
        // // Localte the full title with a unique string
        // const textSelector = await page.waitForSelector(
        //     'text/Customize and automate'
        // );
        // if(textSelector){
        //     const fullTitle = await textSelector.evaluate(el => el.textContent);
        //     // Print the full title
        //     console.log('The title of this blog post is "%s".', fullTitle);
        // }
        await browser.close();
    })();
}

function getCurrentWeek(){
    // https://stackoverflow.com/questions/5210376/how-to-get-first-and-last-day-of-the-current-week-in-javascript
    var curr = new Date(); // get current date
    var startDate = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    var endDate = startDate + 6; // last day is the first day + 6
    // return {startDate: new Date(2023,0,29),endDate:new Date(2023,1,7)}
    return  {startDate:new Date(curr.setDate(startDate)),endDate:new Date(curr.setDate(endDate))};
}


export async function sleep(ms=1000,info?:string){
    if(info){
        console.info(`${new Date().toLocaleTimeString()} sleep :${info}`, ms);
    }
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms)
    })
}
