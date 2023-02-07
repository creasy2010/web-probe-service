
if(require.main === module ){
    setTimeout(async()=>{
        let repoIds =[];
        let dupIds= [] ;
        for (let i = 0, iLen = data.length; i < iLen; i++) {
            let dataElement = data[i];
            if(!repoIds.includes(dataElement.repoId)){
                repoIds.push(dataElement.repoId);
            }else{
                dupIds.push(dataElement.id);
            }
        }
        console.info(`${new Date().toLocaleTimeString()} src/sqldel.ts:():dupIds`,dupIds.length);
        console.info(`delete from ZPWSGithubRepoInd where id in (${dupIds.join(',')})`,);
    },100)
}

const data  =[
]

