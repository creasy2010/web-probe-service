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
export class ZTeamGitProjects {

    static build(httpClient: IHttpClient) {
        return new ZTeamGitProjects(httpClient);
    }

    constructor(public httpClient: IHttpClient) {
    }

    /**
     * 添加
     * @param colInfo
     */
    async add(colInfo: IZTeamGitProjects): Promise<{
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


        //@ts-ignore
        if (colInfo["createdAt"] && colInfo["createdAt"].toLocaleString) {
            //@ts-ignore
            colInfo["createdAt"] = `${colInfo["createdAt"].getFullYear()}-${colInfo["createdAt"].getMonth() + 1}-${colInfo["createdAt"].getDate()} ${colInfo["createdAt"].getHours()}:${colInfo["createdAt"].getMinutes()}:${colInfo["createdAt"].getSeconds()}`;
        }


        let result = await this.httpClient.post<IResult>(`/post`, {
            "ZTeamGitProjects": {
                ...colInfo,
            },
            "tag": "ZTeamGitProjects"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZTeamGitProjects as any;
    }

    /**
     * 添加
     * @param colInfo
     */
    async addBatch(colInfo: IZTeamGitProjects[]): Promise<{
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

        colInfo = colInfo.map(item => {
            //@ts-ignore
            if (item["createdAt"] && item["createdAt"].toLocaleString) {
                //@ts-ignore
                item["createdAt"] = `${item["createdAt"].getFullYear()}-${item["createdAt"].getMonth() + 1}-${item["createdAt"].getDate()} ${item["createdAt"].getHours()}:${item["createdAt"].getMinutes()}:${item["createdAt"].getSeconds()}`;
            }

            return item;
        })

        let result = await this.httpClient.post<IResult>(`/post`, {
            "ZTeamGitProjects[]": colInfo,
            "tag": "ZTeamGitProjects[]"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZTeamGitProjects as any;
    }

    /**
     * 获取节点
     * @param id
     */
    async get(id: number): Promise<IZTeamGitProjects> {
        let result = await this.httpClient.post(`/get`, {
            "ZTeamGitProjects": {
                id: id
            }
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }
        return result.ZTeamGitProjects as any;
    }

    /**
     * 从数据库字段类型到前端类型
     * @param item
     */
    fromDb(item: Partial<IZTeamGitProjects>): IZTeamGitProjects {
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


        //@ts-ignore
        if (item["createdAt"] && item["createdAt"].toLocaleString) {
            //@ts-ignore
            item["createdAt"] = `${item["createdAt"].getFullYear()}-${item["createdAt"].getMonth() + 1}-${item["createdAt"].getDate()} ${item["createdAt"].getHours()}:${item["createdAt"].getMinutes()}:${item["createdAt"].getSeconds()}`;
        }


        return item as any;
    }

    /**
     * 从前端类型到数据库字段类型
     * @param item
     */
    toDb(item: Partial<IZTeamGitProjects>): IZTeamGitProjects {
        //slot toDb
        return item as any;
    }


    async update(item: Partial<IZTeamGitProjects>): Promise<{
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


        //@ts-ignore
        if (item["createdAt"] && item["createdAt"].toLocaleString) {
            //@ts-ignore
            item["createdAt"] = `${item["createdAt"].getFullYear()}-${item["createdAt"].getMonth() + 1}-${item["createdAt"].getDate()} ${item["createdAt"].getHours()}:${item["createdAt"].getMinutes()}:${item["createdAt"].getSeconds()}`;
        }


        let result = await this.httpClient.post(`/put`, {
            "ZTeamGitProjects": {
                ...item,
            },
            "tag": "ZTeamGitProjects"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZTeamGitProjects as any;
    }

    /**
     * https://github.com/Tencent/APIJSON/blob/master/Document.md
     *
     * @param modifyColInfo
     */
    async updateBatch(ids: number[], modifyColInfo: IZTeamGitProjects) {
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


        //@ts-ignore
        if (modifyColInfo["createdAt"] && modifyColInfo["createdAt"].toLocaleString) {
            //@ts-ignore
            modifyColInfo["createdAt"] = `${modifyColInfo["createdAt"].getFullYear()}-${modifyColInfo["createdAt"].getMonth() + 1}-${modifyColInfo["createdAt"].getDate()} ${modifyColInfo["createdAt"].getHours()}:${modifyColInfo["createdAt"].getMinutes()}:${modifyColInfo["createdAt"].getSeconds()}`;
        }


        let result = await this.httpClient.post(`/put`, {
            "ZTeamGitProjects": {
                "id{}": ids,
                ...modifyColInfo,
            },
            "tag": "ZTeamGitProjects[]"
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
            ZTeamGitProjects: {
                ...condition
            },
            tag: "ZTeamGitProjects[]"
        });
        if (result.ok === false) {
            throw new Error(result.msg);
        }
        return result.ZTeamGitProjects.count;
    }


    /**
     * 查询数量；
     * @param condition
     */
    async countByCol(condition: IQueryColCondition) {
        let result = await this.httpClient.post(`/head`, {
            "ZTeamGitProjects": {
                ...condition,
            }
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }
        return result.ZTeamGitProjects.count as any;

    }

    private async executeQuery(param: IQueryParam): Promise<{
        '[]': {
            ZTeamGitProjects: IZTeamGitProjects;
            [key: string]: any
        }
    }[]> {
        //slot executeQuery
        let result = await this.httpClient.post(`/get`, {
            "[]": {
                ZTeamGitProjects: {
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
        result['[]']?.ZTeamGitProjects?.forEach(item => {
            if (item["addDate"]) {
                //@ts-ignore
                item["addDate"] = new Date(item["addDate"]);
            }
        })

        result['[]']?.ZTeamGitProjects?.forEach(item => {
            if (item["updateDate"]) {
                //@ts-ignore
                item["updateDate"] = new Date(item["updateDate"]);
            }
        })

        result['[]']?.ZTeamGitProjects?.forEach(item => {
            if (item["createdAt"]) {
                //@ts-ignore
                item["createdAt"] = new Date(item["createdAt"]);
            }
        })


        return result;
    }

    /**
     * 查询规则参考:http://apijson.cn/doc/zh/grammar.html#%E6%9F%A5%E8%AF%A2
     *
     */
    async query(param: IQueryParam): Promise<{
        data: IZTeamGitProjects[];
        total: number
    }> {
        let [result, total] = await Promise.all([this.executeQuery(param), this.queryTotalCount(param.colCondition)])
        return {
            data: result['[]']?.map?.((item: any) => item.ZTeamGitProjects) || [],
            total
        };
    }


    /**
     * 查询规则参考:http://apijson.cn/doc/zh/grammar.html#%E6%9F%A5%E8%AF%A2
     *
     */
    async queryAll(condition: IQueryColCondition): Promise<IZTeamGitProjects[]> {
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
        return allResult.map((result: any) => result['[]']?.map?.((item: any) => item.ZTeamGitProjects) || [])?.reduce((pre, cur) => pre.concat(cur), []) || [];
    }

    /**
     *
     * @param colCondition
     */
    async queryTotalCount(colCondition?: IQueryColCondition): Promise<number> {
        let result = await this.httpClient.post(`/get`, {
            "[]": {
                "ZTeamGitProjects": {
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


export interface IZTeamGitProjects {
    id?: number;// 唯一标识:
    old_id?: number;// old_id:
    userId?: number;// 租户id:
    name?: string;// 名称:
    alisname?: string;// 别名:
    des?: string;// 描述:
    url?: string;// url:
    gitpath?: string;// 访问地址:
    createdAt?: Date;// 创建时间:
    visibility?: string;// 可见性:
    updateDate?: Date;// 更新时间:
    addDate?: Date;// 添加时间:

    [key: string]: any;
}


