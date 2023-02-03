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
export class ZTeamProjectScan {

    static build(httpClient: IHttpClient) {
        return new ZTeamProjectScan(httpClient);
    }

    constructor(public httpClient: IHttpClient) {
    }

    /**
     * 添加
     * @param colInfo
     */
    async add(colInfo: IZTeamProjectScan): Promise<{
        ok: boolean;
        id: number;
        count: number;
    }> {

        //slot add
        //@ts-ignore
        if (colInfo["createTime"] && colInfo["createTime"].toLocaleString) {
            //@ts-ignore
            colInfo["createTime"] = `${colInfo["createTime"].getFullYear()}-${colInfo["createTime"].getMonth() + 1}-${colInfo["createTime"].getDate()} ${colInfo["createTime"].getHours()}:${colInfo["createTime"].getMinutes()}:${colInfo["createTime"].getSeconds()}`;
        }


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
            "ZTeamProjectScan": {
                ...colInfo,
            },
            "tag": "ZTeamProjectScan"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZTeamProjectScan as any;
    }

    /**
     * 添加
     * @param colInfo
     */
    async addBatch(colInfo: IZTeamProjectScan[]): Promise<{
        ok: boolean;
        id: number;
        count: number;
    }> {
        //slot addBatch
        colInfo = colInfo.map(item => {
            //@ts-ignore
            if (item["createTime"] && item["createTime"].toLocaleString) {
                //@ts-ignore
                item["createTime"] = `${item["createTime"].getFullYear()}-${item["createTime"].getMonth() + 1}-${item["createTime"].getDate()} ${item["createTime"].getHours()}:${item["createTime"].getMinutes()}:${item["createTime"].getSeconds()}`;
            }

            return item;
        })

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
            "ZTeamProjectScan[]": colInfo,
            "tag": "ZTeamProjectScan[]"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZTeamProjectScan as any;
    }

    /**
     * 获取节点
     * @param id
     */
    async get(id: number): Promise<IZTeamProjectScan> {
        let result = await this.httpClient.post(`/get`, {
            "ZTeamProjectScan": {
                id: id
            }
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }
        return result.ZTeamProjectScan as any;
    }

    /**
     * 从数据库字段类型到前端类型
     * @param item
     */
    fromDb(item: Partial<IZTeamProjectScan>): IZTeamProjectScan {
        //slot fromDb
        //@ts-ignore
        if (item["createTime"] && item["createTime"].toLocaleString) {
            //@ts-ignore
            item["createTime"] = `${item["createTime"].getFullYear()}-${item["createTime"].getMonth() + 1}-${item["createTime"].getDate()} ${item["createTime"].getHours()}:${item["createTime"].getMinutes()}:${item["createTime"].getSeconds()}`;
        }


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
    toDb(item: Partial<IZTeamProjectScan>): IZTeamProjectScan {
        //slot toDb
        return item as any;
    }


    async update(item: Partial<IZTeamProjectScan>): Promise<{
        ok: boolean;
        id: number;
        count: number;
    }> {
        if (!item.id) {
            throw new Error(`id is required`);
        }

        //slot update
        //@ts-ignore
        if (item["createTime"] && item["createTime"].toLocaleString) {
            //@ts-ignore
            item["createTime"] = `${item["createTime"].getFullYear()}-${item["createTime"].getMonth() + 1}-${item["createTime"].getDate()} ${item["createTime"].getHours()}:${item["createTime"].getMinutes()}:${item["createTime"].getSeconds()}`;
        }


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
            "ZTeamProjectScan": {
                ...item,
            },
            "tag": "ZTeamProjectScan"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZTeamProjectScan as any;
    }

    /**
     * https://github.com/Tencent/APIJSON/blob/master/Document.md
     *
     * @param modifyColInfo
     */
    async updateBatch(ids: number[], modifyColInfo: IZTeamProjectScan) {
        //slot batchUpdate
        //@ts-ignore
        if (modifyColInfo["createTime"] && modifyColInfo["createTime"].toLocaleString) {
            //@ts-ignore
            modifyColInfo["createTime"] = `${modifyColInfo["createTime"].getFullYear()}-${modifyColInfo["createTime"].getMonth() + 1}-${modifyColInfo["createTime"].getDate()} ${modifyColInfo["createTime"].getHours()}:${modifyColInfo["createTime"].getMinutes()}:${modifyColInfo["createTime"].getSeconds()}`;
        }


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
            "ZTeamProjectScan": {
                "id{}": ids,
                ...modifyColInfo,
            },
            "tag": "ZTeamProjectScan[]"
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
            ZTeamProjectScan: {
                ...condition
            },
            tag: "ZTeamProjectScan[]"
        });
        if (result.ok === false) {
            throw new Error(result.msg);
        }
        return result.ZTeamProjectScan.count;
    }


    /**
     * 查询数量；
     * @param condition
     */
    async countByCol(condition: IQueryColCondition) {
        let result = await this.httpClient.post(`/head`, {
            "ZTeamProjectScan": {
                ...condition,
            }
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }
        return result.ZTeamProjectScan.count as any;

    }

    private async executeQuery(param: IQueryParam): Promise<{
        '[]': {
            ZTeamProjectScan: IZTeamProjectScan;
            [key: string]: any
        }
    }[]> {
        //slot executeQuery
        let result = await this.httpClient.post(`/get`, {
            "[]": {
                ZTeamProjectScan: {
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
        result['[]']?.ZTeamProjectScan?.forEach(item => {
            if (item["createTime"]) {
                //@ts-ignore
                item["createTime"] = new Date(item["createTime"]);
            }
        })

        result['[]']?.ZTeamProjectScan?.forEach(item => {
            if (item["addDate"]) {
                //@ts-ignore
                item["addDate"] = new Date(item["addDate"]);
            }
        })

        result['[]']?.ZTeamProjectScan?.forEach(item => {
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
        data: IZTeamProjectScan[];
        total: number
    }> {
        let [result, total] = await Promise.all([this.executeQuery(param), this.queryTotalCount(param.colCondition)])
        return {
            data: result['[]']?.map?.((item: any) => item.ZTeamProjectScan) || [],
            total
        };
    }


    /**
     * 查询规则参考:http://apijson.cn/doc/zh/grammar.html#%E6%9F%A5%E8%AF%A2
     *
     */
    async queryAll(condition: IQueryColCondition): Promise<IZTeamProjectScan[]> {
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
        return allResult.map((result: any) => result['[]']?.map?.((item: any) => item.ZTeamProjectScan) || [])?.reduce((pre, cur) => pre.concat(cur), []) || [];
    }

    /**
     *
     * @param colCondition
     */
    async queryTotalCount(colCondition?: IQueryColCondition): Promise<number> {
        let result = await this.httpClient.post(`/get`, {
            "[]": {
                "ZTeamProjectScan": {
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


export interface IZTeamProjectScan {
    id?: number;// 唯一标识:
    _id?: string;// _id:
    peojectId?: string;// 项目id:
    userId?: number;// 租户id:
    updateDate?: Date;// 更新时间:
    addDate?: Date;// 添加时间:
    createTime?: Date;// 创建时间:

    [key: string]: any;
}


