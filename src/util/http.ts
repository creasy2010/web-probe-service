import axios from 'axios';

const loadPageTimeout = 20 * 1000;

export async function loadPageSource(pageUrl: string, param?: { tryCount: number }) {
    let tryCount = param?.tryCount || 1;
    let response: any,lastError;

    while (tryCount > 0) {
        try {
            response = await loadPage(pageUrl);
            if (response.status == 200) {
                break;
            }
            tryCount--;
        } catch (err) {
            console.log(`load page source error,try again:[${tryCount}]`, pageUrl, err);
            tryCount--;
        }
    }
    // let response = await  axios.get(pageUrl,{timeout:40000});

    if (response?.status != 200) {
        throw new Error(`load page source error`)
        console.error(`${new Date().toLocaleTimeString()} src/util/http.ts:loadPageSource():`,lastError );
    }

    return response;
}

async function loadPage(pageUrl: string) {
    return axios.get(pageUrl, {timeout: loadPageTimeout});
}