import {IHttpClient} from "./http";
import {IQueryColCondition, IQueryParam, IResult} from "./ApiJSON.types";
import {IZPWSGitHubRepo} from "./ZPWSGitHubRepo";

//import
/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2022/10/5
 **/
export class ZPWSGithubRepoInd {

    static build(httpClient: IHttpClient) {
        return new ZPWSGithubRepoInd(httpClient);
    }

    constructor(public httpClient: IHttpClient) {
    }

    /**
     * 添加
     * @param colInfo
     */
    async add(colInfo: IZPWSGithubRepoInd): Promise<{
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


        let result = await this.httpClient.post<IResult>(`/post`, {
            "ZPWSGithubRepoInd": {
                ...colInfo,
            },
            "tag": "ZPWSGithubRepoInd"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZPWSGithubRepoInd as any;
    }

    /**
     * 添加
     * @param colInfo
     */
    async addBatch(colInfo: IZPWSGithubRepoInd[]): Promise<{
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

        let result = await this.httpClient.post<IResult>(`/post`, {
            "ZPWSGithubRepoInd[]": colInfo,
            "tag": "ZPWSGithubRepoInd[]"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZPWSGithubRepoInd as any;
    }

    /**
     * 获取节点
     * @param id
     */
    async get(id: number): Promise<IZPWSGithubRepoInd> {
        let result = await this.httpClient.post(`/get`, {
            "ZPWSGithubRepoInd": {
                id: id
            }
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }
        return result.ZPWSGithubRepoInd as any;
    }

    /**
     * 从数据库字段类型到前端类型
     * @param item
     */
    fromDb(item: Partial<IZPWSGithubRepoInd>): IZPWSGithubRepoInd {
        //slot fromDb
        //@ts-ignore
        if (item["addDate"] && item["addDate"].toLocaleString) {
            //@ts-ignore
            item["addDate"] = `${item["addDate"].getFullYear()}-${item["addDate"].getMonth() + 1}-${item["addDate"].getDate()} ${item["addDate"].getHours()}:${item["addDate"].getMinutes()}:${item["addDate"].getSeconds()}`;
        }


        return item as any;
    }

    /**
     * 从前端类型到数据库字段类型
     * @param item
     */
    toDb(item: Partial<IZPWSGithubRepoInd>): IZPWSGithubRepoInd {
        //slot toDb
        return item as any;
    }


    async update(item: Partial<IZPWSGithubRepoInd>): Promise<{
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


        let result = await this.httpClient.post(`/put`, {
            "ZPWSGithubRepoInd": {
                ...item,
            },
            "tag": "ZPWSGithubRepoInd"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZPWSGithubRepoInd as any;
    }

    /**
     * https://github.com/Tencent/APIJSON/blob/master/Document.md
     *
     * @param modifyColInfo
     */
    async updateBatch(ids: number[], modifyColInfo: IZPWSGithubRepoInd) {
        //slot batchUpdate
        //@ts-ignore
        if (modifyColInfo["addDate"] && modifyColInfo["addDate"].toLocaleString) {
            //@ts-ignore
            modifyColInfo["addDate"] = `${modifyColInfo["addDate"].getFullYear()}-${modifyColInfo["addDate"].getMonth() + 1}-${modifyColInfo["addDate"].getDate()} ${modifyColInfo["addDate"].getHours()}:${modifyColInfo["addDate"].getMinutes()}:${modifyColInfo["addDate"].getSeconds()}`;
        }


        let result = await this.httpClient.post(`/put`, {
            "ZPWSGithubRepoInd": {
                "id{}": ids,
                ...modifyColInfo,
            },
            "tag": "ZPWSGithubRepoInd[]"
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
            ZPWSGithubRepoInd: {
                ...condition
            },
            tag: "ZPWSGithubRepoInd[]"
        });
        if (result.ok === false) {
            throw new Error(result.msg);
        }
        return result.ZPWSGithubRepoInd.count;
    }


    /**
     * 查询数量；
     * @param condition
     */
    async countByCol(condition: IQueryColCondition) {
        let result = await this.httpClient.post(`/head`, {
            "ZPWSGithubRepoInd": {
                ...condition,
            }
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }
        return result.ZPWSGithubRepoInd.count as any;

    }

    private async executeQuery(param: IQueryParam): Promise<{
        '[]': {
            ZPWSGithubRepoInd: IZPWSGithubRepoInd;
            [key: string]: any
        }
    }[]> {
        //slot executeQuery
        let result = await this.httpClient.post(`/get`, {
            "[]": {
                ZPWSGithubRepoInd: {
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
        result['[]']?.ZPWSGithubRepoInd?.forEach(item => {
            if (item["addDate"]) {
                //@ts-ignore
                item["addDate"] = new Date(item["addDate"]);
            }
        })


        return result;
    }

    /**
     * 查询规则参考:http://apijson.cn/doc/zh/grammar.html#%E6%9F%A5%E8%AF%A2
     *
     */
    async query(param: IQueryParam): Promise<{
        data: IZPWSGithubRepoInd[];
        total: number
    }> {
        let [result, total] = await Promise.all([this.executeQuery(param), this.queryTotalCount(param.colCondition)])
        return {
            data: result['[]']?.map?.((item: any) => item.ZPWSGithubRepoInd) || [],
            total
        };
    }


    /**
     * 查询规则参考:http://apijson.cn/doc/zh/grammar.html#%E6%9F%A5%E8%AF%A2
     *
     */
    async queryAll(condition: IQueryColCondition): Promise<IZPWSGithubRepoInd[]> {
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
        return allResult.map((result: any) => result['[]']?.map?.((item: any) => item.ZPWSGithubRepoInd) || [])?.reduce((pre, cur) => pre.concat(cur), []) || [];
    }

    /**
     *
     * @param colCondition
     */
    async queryTotalCount(colCondition?: IQueryColCondition): Promise<number> {
        let result = await this.httpClient.post(`/get`, {
            "[]": {
                "ZPWSGithubRepoInd": {
                    ...colCondition || {},
                },
                query: 1
            },
            "total@": "/[]/total"
        });
        return result.total;
    }

    //end

    //todo 只要存在关联关系字段就可以使用这种方式查询；
    async queryByLinkId(param: {
        repoId?: number
    }) {
        return this.query({
            colCondition: {
                ...param
            }
        });
    }


    async queryAllByLinkId(param: {
        repoId?: number
    }) {
        return this.queryAll(param);
    }


    /**
     * 基本关联查询一次性处理；
     * @param param
     */
    private async executeQueryWithRel(param: IQueryParam): Promise<(IZPWSGithubRepoInd & { repoInfo?: IZPWSGitHubRepo })[]> {
        let result = await this.httpClient.post(`/get`, {
            '[]': {
                page: param?.page || 0,
                count: param?.count || 50,
                ZPWSGithubRepoInd: {
                    ...(param?.colCondition || {}),
                },

                ZPWSGitHubRepo: {
                    'id@': '/ZPWSGithubRepoInd/repoId',
                }

            },
        });

        if (result.ok === false) {
            throw new Error(result.msg);
        }

        if (!result['[]'] || result['[]'].length === 0) {
            return [];
        }

        let idMap: any = {}, data = [];
        for (let i = 0, iLen = result['[]'].length; i < iLen; i++) {
            let item = result['[]'][i] as IZPWSGithubRepoInd;
            let newItem = {
                ...item.ZPWSGithubRepoInd,
                repoInfo: item.ZPWSGitHubRepo, _repoInfo: item.ZPWSGitHubRepo
            };
            idMap[newItem.id] = newItem;
            data.push(newItem);
        }


        return data;
    }


    /**
     * 查询，并带上父级关联数据； 目前只处理一级的
     * @param param
     */
    async queryWithRel(param: IQueryParam): Promise<{
        data: (IZPWSGithubRepoInd & { _repoInfo?: IZPWSGitHubRepo })[];
        total: number;
    }> {
        let [data, total] = await Promise.all([
            this.executeQueryWithRel(param),
            this.queryTotalCount(param?.colCondition),
        ]);

        //处理多表查询的问题； 

        return {
            data,
            total,
        };
    }


    /**
     * 查询规则参考:http://apijson.cn/doc/zh/grammar.html#%E6%9F%A5%E8%AF%A2
     *
     */
    async queryAllWithRel(
        condition: IQueryColCondition,
    ): Promise<IZPWSGithubRepoInd[]> {
        let totalCount = await this.queryTotalCount(condition);
        const perPage = 100;
        let totalPage = Math.ceil(totalCount / perPage);
        let allRequest = [];
        for (let i = 0; i < totalPage; i++) {
            //todo 先同步获取,后续改成异步获取; 大量数据部建议使用此接口；
            allRequest.push(
                this.executeQueryWithRel({
                    page: i,
                    colCondition: condition,
                    count: perPage,
                }),
            );
        }
        let allResult = await Promise.all(allRequest);
        return allResult.reduce((pre, cur) => pre.concat(cur), []) || [];
    }
}


export interface IZPWSGithubRepoInd {
    id?: number;// 唯一标识:
    userId?: number;// 租户id:
    repoId?: number;// 库id:
    watchInd?: number;// 关注人数:
    starInd?: number;// start人数:
    forkInd?: number;// fork人数:
    contributorInd?: number;// 参与贡献人数:
    prOpen?: number;// openPr数量:
    prClosed?: number;// closePr数量:
    issueClosed?: number;// 关闭问题数量:
    issueOpen?: number;// 开启问题数量:
    addDate?: Date;// 添加时间:

    [key: string]: any;
}


