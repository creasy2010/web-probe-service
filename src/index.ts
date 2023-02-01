import puppeteer from 'puppeteer';
import {loadPageSource} from "./util/http";
import buildTask from "./task/task-build";
import SGithubRepoList from "./task/s-github-repo-list";

(async () => {

    while (true){
        try {
            await new SGithubRepoList({}).run();
        } catch (err) {
            console.warn("方法:", err);
        }
    }

    return;

    // todo dong 2023/2/1 先写死处理;
    let repoList = [
        
    ];

   await  buildTask('SGithub',{
       github:'https://github.com/fathyb/carbonyl',
   }).run();


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

async function sleep(ms=1000){
    console.info(`${new Date().toLocaleTimeString()} src/index.ts:sleep():`, ms);
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms)
    })
}