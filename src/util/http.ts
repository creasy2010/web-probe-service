import axios from 'axios';


export async function loadPageSource(pageUrl:string){
    let response = await  axios.get(pageUrl,{timeout:40000});
    if(response.status!=200){
     throw new Error(`load page source error`)
    }

    return response;
}