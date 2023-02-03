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
export class ZTeamMember {

    static build(httpClient: IHttpClient) {
        return new ZTeamMember(httpClient);
    }

    constructor(public httpClient: IHttpClient) {
    }

    /**
     * 添加
     * @param colInfo
     */
    async add(colInfo: IZTeamMember): Promise<{
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
        if (colInfo["inCompanyDate"] && colInfo["inCompanyDate"].toLocaleString) {
            //@ts-ignore
            colInfo["inCompanyDate"] = `${colInfo["inCompanyDate"].getFullYear()}-${colInfo["inCompanyDate"].getMonth() + 1}-${colInfo["inCompanyDate"].getDate()} ${colInfo["inCompanyDate"].getHours()}:${colInfo["inCompanyDate"].getMinutes()}:${colInfo["inCompanyDate"].getSeconds()}`;
        }


        let result = await this.httpClient.post<IResult>(`/post`, {
            "ZTeamMember": {
                ...colInfo,
            },
            "tag": "ZTeamMember"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZTeamMember as any;
    }

    /**
     * 添加
     * @param colInfo
     */
    async addBatch(colInfo: IZTeamMember[]): Promise<{
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
            if (item["inCompanyDate"] && item["inCompanyDate"].toLocaleString) {
                //@ts-ignore
                item["inCompanyDate"] = `${item["inCompanyDate"].getFullYear()}-${item["inCompanyDate"].getMonth() + 1}-${item["inCompanyDate"].getDate()} ${item["inCompanyDate"].getHours()}:${item["inCompanyDate"].getMinutes()}:${item["inCompanyDate"].getSeconds()}`;
            }

            return item;
        })

        let result = await this.httpClient.post<IResult>(`/post`, {
            "ZTeamMember[]": colInfo,
            "tag": "ZTeamMember[]"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZTeamMember as any;
    }

    /**
     * 获取节点
     * @param id
     */
    async get(id: number): Promise<IZTeamMember> {
        let result = await this.httpClient.post(`/get`, {
            "ZTeamMember": {
                id: id
            }
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }
        return result.ZTeamMember as any;
    }

    /**
     * 从数据库字段类型到前端类型
     * @param item
     */
    fromDb(item: Partial<IZTeamMember>): IZTeamMember {
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
        if (item["inCompanyDate"] && item["inCompanyDate"].toLocaleString) {
            //@ts-ignore
            item["inCompanyDate"] = `${item["inCompanyDate"].getFullYear()}-${item["inCompanyDate"].getMonth() + 1}-${item["inCompanyDate"].getDate()} ${item["inCompanyDate"].getHours()}:${item["inCompanyDate"].getMinutes()}:${item["inCompanyDate"].getSeconds()}`;
        }


        return item as any;
    }

    /**
     * 从前端类型到数据库字段类型
     * @param item
     */
    toDb(item: Partial<IZTeamMember>): IZTeamMember {
        //slot toDb
        return item as any;
    }


    async update(item: Partial<IZTeamMember>): Promise<{
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
        if (item["inCompanyDate"] && item["inCompanyDate"].toLocaleString) {
            //@ts-ignore
            item["inCompanyDate"] = `${item["inCompanyDate"].getFullYear()}-${item["inCompanyDate"].getMonth() + 1}-${item["inCompanyDate"].getDate()} ${item["inCompanyDate"].getHours()}:${item["inCompanyDate"].getMinutes()}:${item["inCompanyDate"].getSeconds()}`;
        }


        let result = await this.httpClient.post(`/put`, {
            "ZTeamMember": {
                ...item,
            },
            "tag": "ZTeamMember"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZTeamMember as any;
    }

    /**
     * https://github.com/Tencent/APIJSON/blob/master/Document.md
     *
     * @param modifyColInfo
     */
    async updateBatch(ids: number[], modifyColInfo: IZTeamMember) {
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
        if (modifyColInfo["inCompanyDate"] && modifyColInfo["inCompanyDate"].toLocaleString) {
            //@ts-ignore
            modifyColInfo["inCompanyDate"] = `${modifyColInfo["inCompanyDate"].getFullYear()}-${modifyColInfo["inCompanyDate"].getMonth() + 1}-${modifyColInfo["inCompanyDate"].getDate()} ${modifyColInfo["inCompanyDate"].getHours()}:${modifyColInfo["inCompanyDate"].getMinutes()}:${modifyColInfo["inCompanyDate"].getSeconds()}`;
        }


        let result = await this.httpClient.post(`/put`, {
            "ZTeamMember": {
                "id{}": ids,
                ...modifyColInfo,
            },
            "tag": "ZTeamMember[]"
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
            ZTeamMember: {
                ...condition
            },
            tag: "ZTeamMember[]"
        });
        if (result.ok === false) {
            throw new Error(result.msg);
        }
        return result.ZTeamMember.count;
    }


    /**
     * 查询数量；
     * @param condition
     */
    async countByCol(condition: IQueryColCondition) {
        let result = await this.httpClient.post(`/head`, {
            "ZTeamMember": {
                ...condition,
            }
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }
        return result.ZTeamMember.count as any;

    }

    private async executeQuery(param: IQueryParam): Promise<{
        '[]': {
            ZTeamMember: IZTeamMember;
            [key: string]: any
        }
    }[]> {
        //slot executeQuery
        let result = await this.httpClient.post(`/get`, {
            "[]": {
                ZTeamMember: {
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
        result['[]']?.ZTeamMember?.forEach(item => {
            if (item["addDate"]) {
                //@ts-ignore
                item["addDate"] = new Date(item["addDate"]);
            }
        })

        result['[]']?.ZTeamMember?.forEach(item => {
            if (item["updateDate"]) {
                //@ts-ignore
                item["updateDate"] = new Date(item["updateDate"]);
            }
        })

        result['[]']?.ZTeamMember?.forEach(item => {
            if (item["inCompanyDate"]) {
                //@ts-ignore
                item["inCompanyDate"] = new Date(item["inCompanyDate"]);
            }
        })


        return result;
    }

    /**
     * 查询规则参考:http://apijson.cn/doc/zh/grammar.html#%E6%9F%A5%E8%AF%A2
     *
     */
    async query(param: IQueryParam): Promise<{
        data: IZTeamMember[];
        total: number
    }> {
        let [result, total] = await Promise.all([this.executeQuery(param), this.queryTotalCount(param.colCondition)])
        return {
            data: result['[]']?.map?.((item: any) => item.ZTeamMember) || [],
            total
        };
    }


    /**
     * 查询规则参考:http://apijson.cn/doc/zh/grammar.html#%E6%9F%A5%E8%AF%A2
     *
     */
    async queryAll(condition: IQueryColCondition): Promise<IZTeamMember[]> {
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
        return allResult.map((result: any) => result['[]']?.map?.((item: any) => item.ZTeamMember) || [])?.reduce((pre, cur) => pre.concat(cur), []) || [];
    }

    /**
     *
     * @param colCondition
     */
    async queryTotalCount(colCondition?: IQueryColCondition): Promise<number> {
        let result = await this.httpClient.post(`/get`, {
            "[]": {
                "ZTeamMember": {
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


export interface IZTeamMember {
    id?: number;// 唯一标识:
    old_id?: string;// old_id:
    userId?: number;// 租户id:
    name?: string;// 姓名:
    category?: string;// 归属分类:
    duty?: string;// 岗位:
    level?: string;// 职级:
    orgFirst?: string;// :null
    orgSecond?: string;// :null
    email?: string;// 邮箱:
    workNo?: string;// :null
    inCompanyDate?: Date;// 入职日期:
    comment?: string;// 员工情况备注:
    orgThird?: string;// :null
    orgForth?: string;// :null
    status?: number;// 状态:
    updateDate?: Date;// 更新时间:
    addDate?: Date;// 添加时间:

    [key: string]: any;
}


