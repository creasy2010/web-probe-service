/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2022/10/5
 **/

import httpClient from './http';
import {ZPWSGitHubRepo} from "./ZPWSGitHubRepo";
import {ZPWSGithubRepoInd} from "./ZPWSGithubRepoInd";


const api = {
    gitHubRepo: ZPWSGitHubRepo.build(httpClient),
    gitHubRepoInd: ZPWSGithubRepoInd.build(httpClient)
};


// api.moment.add({}).then((result)=>{
//   console.log(result);
// })

/**
 * @desc
 */
async function loginAndSaveCookie() {
    // let result  = await api.mirrCaseRecord.add({
    //     //ts-ignore
    //   userId:38710,
    //   "area": "青岛",
    //   "areaCode": "3702",
    //   "tableIndName": "企业所得税A类",
    //   "tableIndCode": "QYSDSALSBB",
    //   "qymc": "青岛裕坤顶石科技信息咨询有限公司",
    //   "linkRelPath": "1111",
    //   "taxType": "init",
    //   "comment": "测试",
    //   nsqxbm:"月",
    // })
    // api.system.login("13000038710","666666").then(async (result)=>{
    //   //@ts-ignore;
    //   httpClient.setCookie(result._response?.headers?.['set-cookie']);
    //   // let result1= await api.moment.add({
    //   //   content:"testset"
    //   // });
    //   // await api.moment.update({id:1664982990679,content:"testset12312",});
    //   // let momentResult= await api.moment.get(1664982990679);
    //   // let moments = await api.moment.query({
    //   //     count:100,
    //   //   });
    //   // let momentsCount = await api.moment.queryTotalCount();
    //   // let result2 = await api.moment.delete({ids:[1664975077652]});
    // });
}

// setInterval(async ()=>{
//   // try {
//     loginAndSaveCookie();
//     // let result  = await api.system.getUserInfo();
//     // if(result.ok===false){
//     //   console.warn("登录失效,尝试重新登录");
//     //   loginAndSaveCookie();
//     //   return ;
//     // }
//     // console.log(result);
//   // } catch (err) {
//   //   loginAndSaveCookie();
//   // }
// },10000);
//
// loginAndSaveCookie();

export default api;

