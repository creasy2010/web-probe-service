import * as fse from "fs-extra";
import * as path from 'path';

let filePath =path.join(__dirname,"../../localStorage.json")

let storageMap:{
    [key:string]:any;
}={};
try {
      storageMap =fse.readJSONSync(filePath);
}catch(e){

}
class LocalStorage {
    constructor() {
    }

    setItem(key:string,value:any){
        storageMap[key]=value;
        this.autoSave()
    }

    delItem(key:string,){
        delete storageMap[key];
        this.autoSave()
    }
    getItem(key:string){
        return storageMap[key];
    }

    private autoSave(){
        fse.writeJsonSync(filePath,storageMap);
    }
}


export default new LocalStorage();