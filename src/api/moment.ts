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
export class Moment {

    static build(httpClient: IHttpClient) {
        return new Moment(httpClient);
    }

    constructor(public httpClient: IHttpClient) {
    }

    /**
     * 添加
     * @param colInfo
     */
    async add(colInfo: IMoment): Promise<{
        ok: boolean;
        id: number;
        count: number;
    }> {

        //slot add
        let result = await this.httpClient.post<IResult>(`/post`, {
            "Moment": {
                ...colInfo,
            },
            "tag": "Moment"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.Moment as any;
    }

    /**
     * 添加
     * @param colInfo
     */
    async addBatch(colInfo: IMoment[]): Promise<{
        ok: boolean;
        id: number;
        count: number;
    }> {
        //slot addBatch
        let result = await this.httpClient.post<IResult>(`/post`, {
            "Moment[]": colInfo,
            "tag": "Moment[]"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.Moment as any;
    }

    /**
     * 获取节点
     * @param id
     */
    async get(id: number): Promise<IMoment> {
        let result = await this.httpClient.post(`/get`, {
            "Moment": {
                id: id
            }
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }
        return result.Moment as any;
    }

    /**
     * 从数据库字段类型到前端类型
     * @param item
     */
    fromDb(item: Partial<IMoment>): IMoment {
        //slot fromDb

        return item as any;
    }

    /**
     * 从前端类型到数据库字段类型
     * @param item
     */
    toDb(item: Partial<IMoment>): IMoment {
        //slot toDb
        return item as any;
    }


    async update(item: Partial<IMoment>): Promise<{
        ok: boolean;
        id: number;
        count: number;
    }> {
        if (!item.id) {
            throw new Error(`id is required`);
        }

        //slot update

        let result = await this.httpClient.post(`/put`, {
            "Moment": {
                ...item,
            },
            "tag": "Moment"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.Moment as any;
    }

    /**
     * https://github.com/Tencent/APIJSON/blob/master/Document.md
     *
     * @param modifyColInfo
     */
    async updateBatch(ids: number[], modifyColInfo: IMoment) {
        //slot batchUpdate
        let result = await this.httpClient.post(`/put`, {
            "Moment": {
                "id{}": ids,
                ...modifyColInfo,
            },
            "tag": "Moment[]"
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
            Moment: {
                ...condition
            },
            tag: "Moment[]"
        });
        if (result.ok === false) {
            throw new Error(result.msg);
        }
        return result.Moment.count;
    }


    /**
     * 查询数量；
     * @param condition
     */
    async countByCol(condition: IQueryColCondition) {
        let result = await this.httpClient.post(`/head`, {
            "Moment": {
                ...condition,
            }
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }
        return result.Moment.count as any;

    }

    private async executeQuery(param: IQueryParam): Promise<{
        '[]': {
            Moment: IMoment;
            [key: string]: any
        }
    }[]> {
        //slot executeQuery
        let result = await this.httpClient.post(`/get`, {
            "[]": {
                Moment: {
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

        return result;
    }

    /**
     * 查询规则参考:http://apijson.cn/doc/zh/grammar.html#%E6%9F%A5%E8%AF%A2
     *
     */
    async query(param: IQueryParam): Promise<{
        data: IMoment[];
        total: number
    }> {
        let [result, total] = await Promise.all([this.executeQuery(param), this.queryTotalCount(param.colCondition)])
        return {
            data: result['[]']?.map?.((item: any) => item.Moment) || [],
            total
        };
    }


    /**
     * 查询规则参考:http://apijson.cn/doc/zh/grammar.html#%E6%9F%A5%E8%AF%A2
     *
     */
    async queryAll(condition: IQueryColCondition): Promise<IMoment[]> {
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
        return allResult.map((result: any) => result['[]']?.map?.((item: any) => item.Moment) || [])?.reduce((pre, cur) => pre.concat(cur), []) || [];
    }

    /**
     *
     * @param colCondition
     */
    async queryTotalCount(colCondition?: IQueryColCondition): Promise<number> {
        let result = await this.httpClient.post(`/get`, {
            "[]": {
                "Moment": {
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


export interface IMoment {
    id?: number;
    content?: string;
    date?: string;
    praiseUserIdList?: number[];
    pictureList?: number[];

    [key: string]: any;
}


