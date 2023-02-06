import axios from 'axios';
import {sleep} from "../index";

const loadPageTimeout = 20 * 1000;

export async function loadPageSource(pageUrl: string, param?: { tryCount?: number;waitTime?:number,keyword?:string }) {
    console.info(`${new Date().toLocaleTimeString()} src/util/http.ts:loadPageSource():`, pageUrl);
    let tryCount = param?.tryCount || 1;
    let response: any,lastError;

    while (tryCount > 0) {
        try {
            response = await loadPage(pageUrl);
            if(param.keyword &&  response.data){
                if(response.data.indexOf(param.keyword)==-1){
                    throw new Error(`load page source error,keyword not found`)
                }
            }
            if (response.status == 200) {
                break;
            }
            tryCount--;
        } catch (err) {
            lastError=err;
            tryCount--;
            console.warn(`load page source error,try again:[${tryCount}]`, pageUrl);
        }
        await sleep(param?.waitTime);
    }
    // let response = await  axios.get(pageUrl,{timeout:40000});
    if (response?.status != 200) {
        console.error(`${new Date().toLocaleTimeString()} src/util/http.ts:loadPageSource():`,lastError );
        throw new Error(`load page source error`)
    }
    if(response.data.indexOf(param.keyword)==-1){
        console.error(`${new Date().toLocaleTimeString()} src/util/http.ts:loadPageSource():load page source error,keyword not found`,param.keyword,pageUrl);
        throw new Error(`load page source error,keyword not found`)
    }
    return response;
}

async function loadPage(pageUrl: string) {
    return axios.get(pageUrl, {timeout: loadPageTimeout});
}