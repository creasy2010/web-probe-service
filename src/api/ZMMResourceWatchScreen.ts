import {IHttpClient} from "./http";
import {IQueryColCondition, IQueryParam, IResult} from "./ApiJSON.types";

//import
/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2022/10/5
 **/
export class ZMMResourceWatchScreen {

    static build(httpClient: IHttpClient) {
        return new ZMMResourceWatchScreen(httpClient);
    }

    constructor(public httpClient: IHttpClient) {
    }

    /**
     * 添加
     * @param colInfo
     */
    async add(colInfo: IZMMResourceWatchScreen): Promise<{
        ok: boolean;
        id: number;
        count: number;
    }> {

        //slot add
        //@ts-ignore
        if (colInfo["addDate"] && colInfo["addDate"].toLocaleString) {
            //@ts-ignore
            colInfo["addDate"] = `${colInfo["addDate"].getFullYear()}-${colInfo["addDate"].getMonth() + 1}-${colInfo["addDate"].getDate()} ${colInfo["addDate"].getHours()}:${colInfo["addDate"].getMinutes()}:${colInfo["addDate"].getSeconds()}`;
        }


        //@ts-ignore
        if (colInfo["updateDate"] && colInfo["updateDate"].toLocaleString) {
            //@ts-ignore
            colInfo["updateDate"] = `${colInfo["updateDate"].getFullYear()}-${colInfo["updateDate"].getMonth() + 1}-${colInfo["updateDate"].getDate()} ${colInfo["updateDate"].getHours()}:${colInfo["updateDate"].getMinutes()}:${colInfo["updateDate"].getSeconds()}`;
        }


        let result = await this.httpClient.post<IResult>(`/post`, {
            "ZMMResourceWatchScreen": {
                ...colInfo,
            },
            "tag": "ZMMResourceWatchScreen"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZMMResourceWatchScreen as any;
    }

    /**
     * 添加
     * @param colInfo
     */
    async addBatch(colInfo: IZMMResourceWatchScreen[]): Promise<{
        ok: boolean;
        id: number;
        count: number;
    }> {
        //slot addBatch
        colInfo = colInfo.map(item => {
            //@ts-ignore
            if (item["addDate"] && item["addDate"].toLocaleString) {
                //@ts-ignore
                item["addDate"] = `${item["addDate"].getFullYear()}-${item["addDate"].getMonth() + 1}-${item["addDate"].getDate()} ${item["addDate"].getHours()}:${item["addDate"].getMinutes()}:${item["addDate"].getSeconds()}`;
            }

            return item;
        })

        colInfo = colInfo.map(item => {
            //@ts-ignore
            if (item["updateDate"] && item["updateDate"].toLocaleString) {
                //@ts-ignore
                item["updateDate"] = `${item["updateDate"].getFullYear()}-${item["updateDate"].getMonth() + 1}-${item["updateDate"].getDate()} ${item["updateDate"].getHours()}:${item["updateDate"].getMinutes()}:${item["updateDate"].getSeconds()}`;
            }

            return item;
        })

        let result = await this.httpClient.post<IResult>(`/post`, {
            "ZMMResourceWatchScreen[]": colInfo,
            "tag": "ZMMResourceWatchScreen[]"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZMMResourceWatchScreen as any;
    }

    /**
     * 获取节点
     * @param id
     */
    async get(id: number): Promise<IZMMResourceWatchScreen> {
        let result = await this.httpClient.post(`/get`, {
            "ZMMResourceWatchScreen": {
                id: id
            }
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }
        return result.ZMMResourceWatchScreen as any;
    }

    /**
     * 从数据库字段类型到前端类型
     * @param item
     */
    fromDb(item: Partial<IZMMResourceWatchScreen>): IZMMResourceWatchScreen {
        //slot fromDb
        //@ts-ignore
        if (item["addDate"] && item["addDate"].toLocaleString) {
            //@ts-ignore
            item["addDate"] = `${item["addDate"].getFullYear()}-${item["addDate"].getMonth() + 1}-${item["addDate"].getDate()} ${item["addDate"].getHours()}:${item["addDate"].getMinutes()}:${item["addDate"].getSeconds()}`;
        }


        //@ts-ignore
        if (item["updateDate"] && item["updateDate"].toLocaleString) {
            //@ts-ignore
            item["updateDate"] = `${item["updateDate"].getFullYear()}-${item["updateDate"].getMonth() + 1}-${item["updateDate"].getDate()} ${item["updateDate"].getHours()}:${item["updateDate"].getMinutes()}:${item["updateDate"].getSeconds()}`;
        }


        return item as any;
    }

    /**
     * 从前端类型到数据库字段类型
     * @param item
     */
    toDb(item: Partial<IZMMResourceWatchScreen>): IZMMResourceWatchScreen {
        //slot toDb
        return item as any;
    }


    async update(item: Partial<IZMMResourceWatchScreen>): Promise<{
        ok: boolean;
        id: number;
        count: number;
    }> {
        if (!item.id) {
            throw new Error(`id is required`);
        }

        //slot update
        //@ts-ignore
        if (item["addDate"] && item["addDate"].toLocaleString) {
            //@ts-ignore
            item["addDate"] = `${item["addDate"].getFullYear()}-${item["addDate"].getMonth() + 1}-${item["addDate"].getDate()} ${item["addDate"].getHours()}:${item["addDate"].getMinutes()}:${item["addDate"].getSeconds()}`;
        }


        //@ts-ignore
        if (item["updateDate"] && item["updateDate"].toLocaleString) {
            //@ts-ignore
            item["updateDate"] = `${item["updateDate"].getFullYear()}-${item["updateDate"].getMonth() + 1}-${item["updateDate"].getDate()} ${item["updateDate"].getHours()}:${item["updateDate"].getMinutes()}:${item["updateDate"].getSeconds()}`;
        }


        let result = await this.httpClient.post(`/put`, {
            "ZMMResourceWatchScreen": {
                ...item,
            },
            "tag": "ZMMResourceWatchScreen"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZMMResourceWatchScreen as any;
    }

    /**
     * https://github.com/Tencent/APIJSON/blob/master/Document.md
     *
     * @param modifyColInfo
     */
    async updateBatch(ids: number[], modifyColInfo: IZMMResourceWatchScreen) {
        //slot batchUpdate
        //@ts-ignore
        if (modifyColInfo["addDate"] && modifyColInfo["addDate"].toLocaleString) {
            //@ts-ignore
            modifyColInfo["addDate"] = `${modifyColInfo["addDate"].getFullYear()}-${modifyColInfo["addDate"].getMonth() + 1}-${modifyColInfo["addDate"].getDate()} ${modifyColInfo["addDate"].getHours()}:${modifyColInfo["addDate"].getMinutes()}:${modifyColInfo["addDate"].getSeconds()}`;
        }


        //@ts-ignore
        if (modifyColInfo["updateDate"] && modifyColInfo["updateDate"].toLocaleString) {
            //@ts-ignore
            modifyColInfo["updateDate"] = `${modifyColInfo["updateDate"].getFullYear()}-${modifyColInfo["updateDate"].getMonth() + 1}-${modifyColInfo["updateDate"].getDate()} ${modifyColInfo["updateDate"].getHours()}:${modifyColInfo["updateDate"].getMinutes()}:${modifyColInfo["updateDate"].getSeconds()}`;
        }


        let result = await this.httpClient.post(`/put`, {
            "ZMMResourceWatchScreen": {
                "id{}": ids,
                ...modifyColInfo,
            },
            "tag": "ZMMResourceWatchScreen[]"
        });

        if (result.ok === false) {
            throw new Error(result.msg);
        }
        return result;
    }

    /**
     * 删除节点;
     * @param param
     */
    async deleteByIds(ids: number[]): Promise<number> {
        return this.deleteByCondition({
            "id{}": ids
        });
    }


    async deleteByCondition(condition: IQueryColCondition): Promise<number> {
        let result = await this.httpClient.post(`/delete`, {
            ZMMResourceWatchScreen: {
                ...condition
            },
            tag: "ZMMResourceWatchScreen[]"
        });
        if (result.ok === false) {
            throw new Error(result.msg);
        }
        return result.ZMMResourceWatchScreen.count;
    }


    /**
     * 查询数量；
     * @param condition
     */
    async countByCol(condition: IQueryColCondition) {
        let result = await this.httpClient.post(`/head`, {
            "ZMMResourceWatchScreen": {
                ...condition,
            }
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }
        return result.ZMMResourceWatchScreen.count as any;

    }

    private async executeQuery(param: IQueryParam): Promise<{
        '[]': {
            ZMMResourceWatchScreen: IZMMResourceWatchScreen;
            [key: string]: any
        }
    }[]> {
        //slot executeQuery
        let result = await this.httpClient.post(`/get`, {
            "[]": {
                ZMMResourceWatchScreen: {
                    ...param?.colCondition || {},
                },
                page: param?.page || 0,
                count: param?.count || 10
            }
        });
        if (result.ok === false) {
            throw new Error(result.msg);
        }
        //slot executeQuery after
        result['[]']?.ZMMResourceWatchScreen?.forEach(item => {
            if (item["addDate"]) {
                //@ts-ignore
                item["addDate"] = new Date(item["addDate"]);
            }
        })

        result['[]']?.ZMMResourceWatchScreen?.forEach(item => {
            if (item["updateDate"]) {
                //@ts-ignore
                item["updateDate"] = new Date(item["updateDate"]);
            }
        })


        return result;
    }

    /**
     * 查询规则参考:http://apijson.cn/doc/zh/grammar.html#%E6%9F%A5%E8%AF%A2
     *
     */
    async query(param: IQueryParam): Promise<{
        data: IZMMResourceWatchScreen[];
        total: number
    }> {
        let [result, total] = await Promise.all([this.executeQuery(param), this.queryTotalCount(param.colCondition)])
        return {
            data: result['[]']?.map?.((item: any) => item.ZMMResourceWatchScreen) || [],
            total
        };
    }


    /**
     * 查询规则参考:http://apijson.cn/doc/zh/grammar.html#%E6%9F%A5%E8%AF%A2
     *
     */
    async queryAll(condition: IQueryColCondition): Promise<IZMMResourceWatchScreen[]> {
        let totalCount = await this.queryTotalCount(condition);
        const perPage = 100;
        let totalPage = Math.ceil(totalCount / perPage);
        let allRequest = [];
        for (let i = 0; i < totalPage; i++) {
            //todo 先同步获取,后续改成异步获取; 大量数据部建议使用此接口；
            allRequest.push(this.executeQuery({
                page: i,
                colCondition: condition,
                count: perPage
            }));
        }

        let allResult = await Promise.all(allRequest);
        return allResult.map((result: any) => result['[]']?.map?.((item: any) => item.ZMMResourceWatchScreen) || [])?.reduce((pre, cur) => pre.concat(cur), []) || [];
    }

    /**
     *
     * @param colCondition
     */
    async queryTotalCount(colCondition?: IQueryColCondition): Promise<number> {
        let result = await this.httpClient.post(`/get`, {
            "[]": {
                "ZMMResourceWatchScreen": {
                    ...colCondition || {},
                },
                query: 1
            },
            "total@": "/[]/total"
        });
        return result.total;
    }

    //end
}


export interface IZMMResourceWatchScreen {
    id?: number;// 唯一标识:
    userId?: number;// 用户id:
    name?: string;// 场景名称:
    dutyPerson?: string;// 负责人:
    notifyUrl?: string;// DingDing通知地址；:
    updateDate?: Date;// 更新时间:
    addDate?: Date;// 添加时间:

    [key: string]: any;
}


