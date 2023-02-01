import SGithub from "./s-github";


type TTaskType = 'SGithub';


export default function buildTask(taskType:TTaskType,taskInfo){

    let task = null;

    switch (taskType) {
        case 'SGithub':
            return new SGithub(taskInfo);

        default:
            break;
    }
    throw new Error(`未知的任务类型`);
}