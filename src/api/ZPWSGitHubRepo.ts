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
export class ZPWSGitHubRepo {

    static build(httpClient: IHttpClient) {
        return new ZPWSGitHubRepo(httpClient);
    }

    constructor(public httpClient: IHttpClient) {
    }

    /**
     * 添加
     * @param colInfo
     */
    async add(colInfo: IZPWSGitHubRepo): Promise<{
        ok: boolean;
        id: number;
        count: number;
    }> {

        //slot add
        //@ts-ignore
        if (colInfo["updateDate"] && colInfo["updateDate"].toLocaleString) {
            //@ts-ignore
            colInfo["updateDate"] = `${colInfo["updateDate"].getFullYear()}-${colInfo["updateDate"].getMonth() + 1}-${colInfo["updateDate"].getDate()} ${colInfo["updateDate"].getHours()}:${colInfo["updateDate"].getMinutes()}:${colInfo["updateDate"].getSeconds()}`;
        }


        //@ts-ignore
        if (colInfo["addDate"] && colInfo["addDate"].toLocaleString) {
            //@ts-ignore
            colInfo["addDate"] = `${colInfo["addDate"].getFullYear()}-${colInfo["addDate"].getMonth() + 1}-${colInfo["addDate"].getDate()} ${colInfo["addDate"].getHours()}:${colInfo["addDate"].getMinutes()}:${colInfo["addDate"].getSeconds()}`;
        }


        if (typeof colInfo["languages"] !== 'string' && typeof colInfo["languages"] === 'object') {
            colInfo["languages"] = JSON.stringify(colInfo["languages"]);
        }


        //@ts-ignore
        if (colInfo["lastIndProbeDate"] && colInfo["lastIndProbeDate"].toLocaleString) {
            //@ts-ignore
            colInfo["lastIndProbeDate"] = `${colInfo["lastIndProbeDate"].getFullYear()}-${colInfo["lastIndProbeDate"].getMonth() + 1}-${colInfo["lastIndProbeDate"].getDate()} ${colInfo["lastIndProbeDate"].getHours()}:${colInfo["lastIndProbeDate"].getMinutes()}:${colInfo["lastIndProbeDate"].getSeconds()}`;
        }


        //@ts-ignore
        if (colInfo["repoCreateDate"] && colInfo["repoCreateDate"].toLocaleString) {
            //@ts-ignore
            colInfo["repoCreateDate"] = `${colInfo["repoCreateDate"].getFullYear()}-${colInfo["repoCreateDate"].getMonth() + 1}-${colInfo["repoCreateDate"].getDate()} ${colInfo["repoCreateDate"].getHours()}:${colInfo["repoCreateDate"].getMinutes()}:${colInfo["repoCreateDate"].getSeconds()}`;
        }


        //@ts-ignore
        if (colInfo["lastCommitDate"] && colInfo["lastCommitDate"].toLocaleString) {
            //@ts-ignore
            colInfo["lastCommitDate"] = `${colInfo["lastCommitDate"].getFullYear()}-${colInfo["lastCommitDate"].getMonth() + 1}-${colInfo["lastCommitDate"].getDate()} ${colInfo["lastCommitDate"].getHours()}:${colInfo["lastCommitDate"].getMinutes()}:${colInfo["lastCommitDate"].getSeconds()}`;
        }


        let result = await this.httpClient.post<IResult>(`/post`, {
            "ZPWSGitHubRepo": {
                ...colInfo,
            },
            "tag": "ZPWSGitHubRepo"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZPWSGitHubRepo as any;
    }

    /**
     * 添加
     * @param colInfo
     */
    async addBatch(colInfo: IZPWSGitHubRepo[]): Promise<{
        ok: boolean;
        id: number;
        count: number;
    }> {
        //slot addBatch
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
            if (item["addDate"] && item["addDate"].toLocaleString) {
                //@ts-ignore
                item["addDate"] = `${item["addDate"].getFullYear()}-${item["addDate"].getMonth() + 1}-${item["addDate"].getDate()} ${item["addDate"].getHours()}:${item["addDate"].getMinutes()}:${item["addDate"].getSeconds()}`;
            }

            return item;
        })

        if (typeof colInfo["languages"] !== 'string' && typeof colInfo["languages"] === 'object') {
            colInfo["languages"] = JSON.stringify(colInfo["languages"]);
        }


        colInfo = colInfo.map(item => {
            //@ts-ignore
            if (item["lastIndProbeDate"] && item["lastIndProbeDate"].toLocaleString) {
                //@ts-ignore
                item["lastIndProbeDate"] = `${item["lastIndProbeDate"].getFullYear()}-${item["lastIndProbeDate"].getMonth() + 1}-${item["lastIndProbeDate"].getDate()} ${item["lastIndProbeDate"].getHours()}:${item["lastIndProbeDate"].getMinutes()}:${item["lastIndProbeDate"].getSeconds()}`;
            }

            return item;
        })

        colInfo = colInfo.map(item => {
            //@ts-ignore
            if (item["repoCreateDate"] && item["repoCreateDate"].toLocaleString) {
                //@ts-ignore
                item["repoCreateDate"] = `${item["repoCreateDate"].getFullYear()}-${item["repoCreateDate"].getMonth() + 1}-${item["repoCreateDate"].getDate()} ${item["repoCreateDate"].getHours()}:${item["repoCreateDate"].getMinutes()}:${item["repoCreateDate"].getSeconds()}`;
            }

            return item;
        })

        colInfo = colInfo.map(item => {
            //@ts-ignore
            if (item["lastCommitDate"] && item["lastCommitDate"].toLocaleString) {
                //@ts-ignore
                item["lastCommitDate"] = `${item["lastCommitDate"].getFullYear()}-${item["lastCommitDate"].getMonth() + 1}-${item["lastCommitDate"].getDate()} ${item["lastCommitDate"].getHours()}:${item["lastCommitDate"].getMinutes()}:${item["lastCommitDate"].getSeconds()}`;
            }

            return item;
        })

        let result = await this.httpClient.post<IResult>(`/post`, {
            "ZPWSGitHubRepo[]": colInfo,
            "tag": "ZPWSGitHubRepo[]"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZPWSGitHubRepo as any;
    }

    /**
     * 获取节点
     * @param id
     */
    async get(id: number): Promise<IZPWSGitHubRepo> {
        //slot get
        let result = await this.httpClient.post(`/get`, {
            "ZPWSGitHubRepo": {
                id: id
            }
        });
        //slot get after
        if (result.ZPWSGitHubRepo["updateDate"]) {
            //@ts-ignore
            result.ZPWSGitHubRepo["updateDate"] = new Date(result.ZPWSGitHubRepo["updateDate"]);
        }

        if (result.ZPWSGitHubRepo["addDate"]) {
            //@ts-ignore
            result.ZPWSGitHubRepo["addDate"] = new Date(result.ZPWSGitHubRepo["addDate"]);
        }

        if (result.ZPWSGitHubRepo["lastIndProbeDate"]) {
            //@ts-ignore
            result.ZPWSGitHubRepo["lastIndProbeDate"] = new Date(result.ZPWSGitHubRepo["lastIndProbeDate"]);
        }

        if (result.ZPWSGitHubRepo["repoCreateDate"]) {
            //@ts-ignore
            result.ZPWSGitHubRepo["repoCreateDate"] = new Date(result.ZPWSGitHubRepo["repoCreateDate"]);
        }

        if (result.ZPWSGitHubRepo["lastCommitDate"]) {
            //@ts-ignore
            result.ZPWSGitHubRepo["lastCommitDate"] = new Date(result.ZPWSGitHubRepo["lastCommitDate"]);
        }


        if (result.code !== 200) {
            throw new Error(result.msg);
        }
        return result.ZPWSGitHubRepo as any;
    }

    /**
     * 从数据库字段类型到前端类型
     * @param item
     */
    fromDb(item: Partial<IZPWSGitHubRepo>): IZPWSGitHubRepo {
        //slot fromDb
        //@ts-ignore
        if (item["updateDate"] && item["updateDate"].toLocaleString) {
            //@ts-ignore
            item["updateDate"] = `${item["updateDate"].getFullYear()}-${item["updateDate"].getMonth() + 1}-${item["updateDate"].getDate()} ${item["updateDate"].getHours()}:${item["updateDate"].getMinutes()}:${item["updateDate"].getSeconds()}`;
        }


        //@ts-ignore
        if (item["addDate"] && item["addDate"].toLocaleString) {
            //@ts-ignore
            item["addDate"] = `${item["addDate"].getFullYear()}-${item["addDate"].getMonth() + 1}-${item["addDate"].getDate()} ${item["addDate"].getHours()}:${item["addDate"].getMinutes()}:${item["addDate"].getSeconds()}`;
        }


        //@ts-ignore
        if (item["lastIndProbeDate"] && item["lastIndProbeDate"].toLocaleString) {
            //@ts-ignore
            item["lastIndProbeDate"] = `${item["lastIndProbeDate"].getFullYear()}-${item["lastIndProbeDate"].getMonth() + 1}-${item["lastIndProbeDate"].getDate()} ${item["lastIndProbeDate"].getHours()}:${item["lastIndProbeDate"].getMinutes()}:${item["lastIndProbeDate"].getSeconds()}`;
        }


        //@ts-ignore
        if (item["repoCreateDate"] && item["repoCreateDate"].toLocaleString) {
            //@ts-ignore
            item["repoCreateDate"] = `${item["repoCreateDate"].getFullYear()}-${item["repoCreateDate"].getMonth() + 1}-${item["repoCreateDate"].getDate()} ${item["repoCreateDate"].getHours()}:${item["repoCreateDate"].getMinutes()}:${item["repoCreateDate"].getSeconds()}`;
        }


        //@ts-ignore
        if (item["lastCommitDate"] && item["lastCommitDate"].toLocaleString) {
            //@ts-ignore
            item["lastCommitDate"] = `${item["lastCommitDate"].getFullYear()}-${item["lastCommitDate"].getMonth() + 1}-${item["lastCommitDate"].getDate()} ${item["lastCommitDate"].getHours()}:${item["lastCommitDate"].getMinutes()}:${item["lastCommitDate"].getSeconds()}`;
        }


        return item as any;
    }

    /**
     * 从前端类型到数据库字段类型
     * @param item
     */
    toDb(item: Partial<IZPWSGitHubRepo>): IZPWSGitHubRepo {
        //slot toDb
        if (typeof item["languages"] !== 'string' && typeof item["languages"] === 'object') {
            item["languages"] = JSON.stringify(item["languages"]);
        }


        return item as any;
    }


    async update(item: Partial<IZPWSGitHubRepo>): Promise<{
        ok: boolean;
        id: number;
        count: number;
    }> {
        if (!item.id) {
            throw new Error(`id is required`);
        }

        //slot update
        //@ts-ignore
        if (item["updateDate"] && item["updateDate"].toLocaleString) {
            //@ts-ignore
            item["updateDate"] = `${item["updateDate"].getFullYear()}-${item["updateDate"].getMonth() + 1}-${item["updateDate"].getDate()} ${item["updateDate"].getHours()}:${item["updateDate"].getMinutes()}:${item["updateDate"].getSeconds()}`;
        }


        //@ts-ignore
        if (item["addDate"] && item["addDate"].toLocaleString) {
            //@ts-ignore
            item["addDate"] = `${item["addDate"].getFullYear()}-${item["addDate"].getMonth() + 1}-${item["addDate"].getDate()} ${item["addDate"].getHours()}:${item["addDate"].getMinutes()}:${item["addDate"].getSeconds()}`;
        }


        if (typeof item["languages"] !== 'string' && typeof item["languages"] === 'object') {
            item["languages"] = JSON.stringify(item["languages"]);
        }


        //@ts-ignore
        if (item["lastIndProbeDate"] && item["lastIndProbeDate"].toLocaleString) {
            //@ts-ignore
            item["lastIndProbeDate"] = `${item["lastIndProbeDate"].getFullYear()}-${item["lastIndProbeDate"].getMonth() + 1}-${item["lastIndProbeDate"].getDate()} ${item["lastIndProbeDate"].getHours()}:${item["lastIndProbeDate"].getMinutes()}:${item["lastIndProbeDate"].getSeconds()}`;
        }


        //@ts-ignore
        if (item["repoCreateDate"] && item["repoCreateDate"].toLocaleString) {
            //@ts-ignore
            item["repoCreateDate"] = `${item["repoCreateDate"].getFullYear()}-${item["repoCreateDate"].getMonth() + 1}-${item["repoCreateDate"].getDate()} ${item["repoCreateDate"].getHours()}:${item["repoCreateDate"].getMinutes()}:${item["repoCreateDate"].getSeconds()}`;
        }


        //@ts-ignore
        if (item["lastCommitDate"] && item["lastCommitDate"].toLocaleString) {
            //@ts-ignore
            item["lastCommitDate"] = `${item["lastCommitDate"].getFullYear()}-${item["lastCommitDate"].getMonth() + 1}-${item["lastCommitDate"].getDate()} ${item["lastCommitDate"].getHours()}:${item["lastCommitDate"].getMinutes()}:${item["lastCommitDate"].getSeconds()}`;
        }


        let result = await this.httpClient.post(`/put`, {
            "ZPWSGitHubRepo": {
                ...item,
            },
            "tag": "ZPWSGitHubRepo"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZPWSGitHubRepo as any;
    }

    /**
     * https://github.com/Tencent/APIJSON/blob/master/Document.md
     *
     * @param modifyColInfo
     */
    async updateBatch(ids: number[], modifyColInfo: IZPWSGitHubRepo) {
        //slot batchUpdate
        //@ts-ignore
        if (modifyColInfo["updateDate"] && modifyColInfo["updateDate"].toLocaleString) {
            //@ts-ignore
            modifyColInfo["updateDate"] = `${modifyColInfo["updateDate"].getFullYear()}-${modifyColInfo["updateDate"].getMonth() + 1}-${modifyColInfo["updateDate"].getDate()} ${modifyColInfo["updateDate"].getHours()}:${modifyColInfo["updateDate"].getMinutes()}:${modifyColInfo["updateDate"].getSeconds()}`;
        }


        //@ts-ignore
        if (modifyColInfo["addDate"] && modifyColInfo["addDate"].toLocaleString) {
            //@ts-ignore
            modifyColInfo["addDate"] = `${modifyColInfo["addDate"].getFullYear()}-${modifyColInfo["addDate"].getMonth() + 1}-${modifyColInfo["addDate"].getDate()} ${modifyColInfo["addDate"].getHours()}:${modifyColInfo["addDate"].getMinutes()}:${modifyColInfo["addDate"].getSeconds()}`;
        }


        if (typeof modifyColInfo["languages"] !== 'string' && typeof modifyColInfo["languages"] === 'object') {
            modifyColInfo["languages"] = JSON.stringify(modifyColInfo["languages"]);
        }


        //@ts-ignore
        if (modifyColInfo["lastIndProbeDate"] && modifyColInfo["lastIndProbeDate"].toLocaleString) {
            //@ts-ignore
            modifyColInfo["lastIndProbeDate"] = `${modifyColInfo["lastIndProbeDate"].getFullYear()}-${modifyColInfo["lastIndProbeDate"].getMonth() + 1}-${modifyColInfo["lastIndProbeDate"].getDate()} ${modifyColInfo["lastIndProbeDate"].getHours()}:${modifyColInfo["lastIndProbeDate"].getMinutes()}:${modifyColInfo["lastIndProbeDate"].getSeconds()}`;
        }


        //@ts-ignore
        if (modifyColInfo["repoCreateDate"] && modifyColInfo["repoCreateDate"].toLocaleString) {
            //@ts-ignore
            modifyColInfo["repoCreateDate"] = `${modifyColInfo["repoCreateDate"].getFullYear()}-${modifyColInfo["repoCreateDate"].getMonth() + 1}-${modifyColInfo["repoCreateDate"].getDate()} ${modifyColInfo["repoCreateDate"].getHours()}:${modifyColInfo["repoCreateDate"].getMinutes()}:${modifyColInfo["repoCreateDate"].getSeconds()}`;
        }


        //@ts-ignore
        if (modifyColInfo["lastCommitDate"] && modifyColInfo["lastCommitDate"].toLocaleString) {
            //@ts-ignore
            modifyColInfo["lastCommitDate"] = `${modifyColInfo["lastCommitDate"].getFullYear()}-${modifyColInfo["lastCommitDate"].getMonth() + 1}-${modifyColInfo["lastCommitDate"].getDate()} ${modifyColInfo["lastCommitDate"].getHours()}:${modifyColInfo["lastCommitDate"].getMinutes()}:${modifyColInfo["lastCommitDate"].getSeconds()}`;
        }


        let result = await this.httpClient.post(`/put`, {
            "ZPWSGitHubRepo": {
                "id{}": ids,
                ...modifyColInfo,
            },
            "tag": "ZPWSGitHubRepo[]"
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
            ZPWSGitHubRepo: {
                ...condition
            },
            tag: "ZPWSGitHubRepo[]"
        });
        if (result.ok === false) {
            throw new Error(result.msg);
        }
        return result.ZPWSGitHubRepo.count;
    }


    /**
     * 查询数量；
     * @param condition
     */
    async countByCol(condition: IQueryColCondition) {
        let result = await this.httpClient.post(`/head`, {
            "ZPWSGitHubRepo": {
                ...condition,
            }
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }
        return result.ZPWSGitHubRepo.count as any;

    }

    private async executeQuery(param: IQueryParam): Promise<{
        '[]': {
            ZPWSGitHubRepo: IZPWSGitHubRepo;
            [key: string]: any
        }
    }[]> {
        //slot executeQuery
        let result = await this.httpClient.post(`/get`, {
            "[]": {
                ZPWSGitHubRepo: {
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
        result['[]']?.forEach(item => {
            if (item?.ZPWSGitHubRepo?.["updateDate"]) {
                //@ts-ignore
                item?.ZPWSGitHubRepo?.["updateDate"] = new Date(item?.ZPWSGitHubRepo?.["updateDate"]);
            }
        })

        result['[]']?.forEach(item => {
            if (item?.ZPWSGitHubRepo?.["addDate"]) {
                //@ts-ignore
                item?.ZPWSGitHubRepo?.["addDate"] = new Date(item?.ZPWSGitHubRepo?.["addDate"]);
            }
        })

        result['[]']?.forEach(item => {
            if (item?.ZPWSGitHubRepo?.["lastIndProbeDate"]) {
                //@ts-ignore
                item?.ZPWSGitHubRepo?.["lastIndProbeDate"] = new Date(item?.ZPWSGitHubRepo?.["lastIndProbeDate"]);
            }
        })

        result['[]']?.forEach(item => {
            if (item?.ZPWSGitHubRepo?.["repoCreateDate"]) {
                //@ts-ignore
                item?.ZPWSGitHubRepo?.["repoCreateDate"] = new Date(item?.ZPWSGitHubRepo?.["repoCreateDate"]);
            }
        })

        result['[]']?.forEach(item => {
            if (item?.ZPWSGitHubRepo?.["lastCommitDate"]) {
                //@ts-ignore
                item?.ZPWSGitHubRepo?.["lastCommitDate"] = new Date(item?.ZPWSGitHubRepo?.["lastCommitDate"]);
            }
        })


        return result;
    }

    /**
     * 查询规则参考:http://apijson.cn/doc/zh/grammar.html#%E6%9F%A5%E8%AF%A2
     *
     */
    async query(param: IQueryParam): Promise<{
        data: IZPWSGitHubRepo[];
        total: number
    }> {
        let [result, total] = await Promise.all([this.executeQuery(param), this.queryTotalCount(param.colCondition)])
        return {
            data: result['[]']?.map?.((item: any) => item.ZPWSGitHubRepo) || [],
            total
        };
    }


    /**
     * 查询规则参考:http://apijson.cn/doc/zh/grammar.html#%E6%9F%A5%E8%AF%A2
     *
     */
    async queryAll(condition: IQueryColCondition): Promise<IZPWSGitHubRepo[]> {
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
        return allResult.map((result: any) => result['[]']?.map?.((item: any) => item.ZPWSGitHubRepo) || [])?.reduce((pre, cur) => pre.concat(cur), []) || [];
    }

    /**
     *
     * @param colCondition
     */
    async queryTotalCount(colCondition?: IQueryColCondition): Promise<number> {
        let result = await this.httpClient.post(`/get`, {
            "[]": {
                "ZPWSGitHubRepo": {
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


export interface IZPWSGitHubRepo {
    id?: number;// 唯一标识:
    userId?: number;// 租户id:
    name?: string;// 项目名称:
    starts?: number;// start数量:
    language?: string;// 主语言:
    descInfo?: string;// 简介:
    lastCommitDate?: Date;// 最后更新时间:
    repoCreateDate?: Date;// 库创建时间:
    lastIndProbeDate?: Date;// 指标最后采集时间:
    languages?: any;// 项目涉及语言:
    addDate?: Date;// 添加时间:
    updateDate?: Date;// 更新时间:

    [key: string]: any;
}


