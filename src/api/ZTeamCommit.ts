import {IHttpClient} from "./http";
import {IQueryColCondition, IQueryParam, IResult} from "./ApiJSON.types";
import {IZTeamGitProjects} from "./ZTeamGitProjects";

//import
/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2022/10/5
 **/
export class ZTeamCommit {

    static build(httpClient: IHttpClient) {
        return new ZTeamCommit(httpClient);
    }

    constructor(public httpClient: IHttpClient) {
    }

    /**
     * 添加
     * @param colInfo
     */
    async add(colInfo: IZTeamCommit): Promise<{
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


        //@ts-ignore
        if (colInfo["commitedDate"] && colInfo["commitedDate"].toLocaleString) {
            //@ts-ignore
            colInfo["commitedDate"] = `${colInfo["commitedDate"].getFullYear()}-${colInfo["commitedDate"].getMonth() + 1}-${colInfo["commitedDate"].getDate()} ${colInfo["commitedDate"].getHours()}:${colInfo["commitedDate"].getMinutes()}:${colInfo["commitedDate"].getSeconds()}`;
        }


        let result = await this.httpClient.post<IResult>(`/post`, {
            "ZTeamCommit": {
                ...colInfo,
            },
            "tag": "ZTeamCommit"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZTeamCommit as any;
    }

    /**
     * 添加
     * @param colInfo
     */
    async addBatch(colInfo: IZTeamCommit[]): Promise<{
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

        colInfo = colInfo.map(item => {
            //@ts-ignore
            if (item["commitedDate"] && item["commitedDate"].toLocaleString) {
                //@ts-ignore
                item["commitedDate"] = `${item["commitedDate"].getFullYear()}-${item["commitedDate"].getMonth() + 1}-${item["commitedDate"].getDate()} ${item["commitedDate"].getHours()}:${item["commitedDate"].getMinutes()}:${item["commitedDate"].getSeconds()}`;
            }

            return item;
        })

        let result = await this.httpClient.post<IResult>(`/post`, {
            "ZTeamCommit[]": colInfo,
            "tag": "ZTeamCommit[]"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZTeamCommit as any;
    }

    /**
     * 获取节点
     * @param id
     */
    async get(id: number): Promise<IZTeamCommit> {
        let result = await this.httpClient.post(`/get`, {
            "ZTeamCommit": {
                id: id
            }
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }
        return result.ZTeamCommit as any;
    }

    /**
     * 从数据库字段类型到前端类型
     * @param item
     */
    fromDb(item: Partial<IZTeamCommit>): IZTeamCommit {
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


        //@ts-ignore
        if (item["commitedDate"] && item["commitedDate"].toLocaleString) {
            //@ts-ignore
            item["commitedDate"] = `${item["commitedDate"].getFullYear()}-${item["commitedDate"].getMonth() + 1}-${item["commitedDate"].getDate()} ${item["commitedDate"].getHours()}:${item["commitedDate"].getMinutes()}:${item["commitedDate"].getSeconds()}`;
        }


        return item as any;
    }

    /**
     * 从前端类型到数据库字段类型
     * @param item
     */
    toDb(item: Partial<IZTeamCommit>): IZTeamCommit {
        //slot toDb
        return item as any;
    }


    async update(item: Partial<IZTeamCommit>): Promise<{
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


        //@ts-ignore
        if (item["commitedDate"] && item["commitedDate"].toLocaleString) {
            //@ts-ignore
            item["commitedDate"] = `${item["commitedDate"].getFullYear()}-${item["commitedDate"].getMonth() + 1}-${item["commitedDate"].getDate()} ${item["commitedDate"].getHours()}:${item["commitedDate"].getMinutes()}:${item["commitedDate"].getSeconds()}`;
        }


        let result = await this.httpClient.post(`/put`, {
            "ZTeamCommit": {
                ...item,
            },
            "tag": "ZTeamCommit"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZTeamCommit as any;
    }

    /**
     * https://github.com/Tencent/APIJSON/blob/master/Document.md
     *
     * @param modifyColInfo
     */
    async updateBatch(ids: number[], modifyColInfo: IZTeamCommit) {
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


        //@ts-ignore
        if (modifyColInfo["commitedDate"] && modifyColInfo["commitedDate"].toLocaleString) {
            //@ts-ignore
            modifyColInfo["commitedDate"] = `${modifyColInfo["commitedDate"].getFullYear()}-${modifyColInfo["commitedDate"].getMonth() + 1}-${modifyColInfo["commitedDate"].getDate()} ${modifyColInfo["commitedDate"].getHours()}:${modifyColInfo["commitedDate"].getMinutes()}:${modifyColInfo["commitedDate"].getSeconds()}`;
        }


        let result = await this.httpClient.post(`/put`, {
            "ZTeamCommit": {
                "id{}": ids,
                ...modifyColInfo,
            },
            "tag": "ZTeamCommit[]"
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
            ZTeamCommit: {
                ...condition
            },
            tag: "ZTeamCommit[]"
        });
        if (result.ok === false) {
            throw new Error(result.msg);
        }
        return result.ZTeamCommit.count;
    }


    /**
     * 查询数量；
     * @param condition
     */
    async countByCol(condition: IQueryColCondition) {
        let result = await this.httpClient.post(`/head`, {
            "ZTeamCommit": {
                ...condition,
            }
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }
        return result.ZTeamCommit.count as any;

    }

    private async executeQuery(param: IQueryParam): Promise<{
        '[]': {
            ZTeamCommit: IZTeamCommit;
            [key: string]: any
        }
    }[]> {
        //slot executeQuery
        let result = await this.httpClient.post(`/get`, {
            "[]": {
                ZTeamCommit: {
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
        result['[]']?.ZTeamCommit?.forEach(item => {
            if (item["addDate"]) {
                //@ts-ignore
                item["addDate"] = new Date(item["addDate"]);
            }
        })

        result['[]']?.ZTeamCommit?.forEach(item => {
            if (item["updateDate"]) {
                //@ts-ignore
                item["updateDate"] = new Date(item["updateDate"]);
            }
        })

        result['[]']?.ZTeamCommit?.forEach(item => {
            if (item["createdAt"]) {
                //@ts-ignore
                item["createdAt"] = new Date(item["createdAt"]);
            }
        })

        result['[]']?.ZTeamCommit?.forEach(item => {
            if (item["commitedDate"]) {
                //@ts-ignore
                item["commitedDate"] = new Date(item["commitedDate"]);
            }
        })


        return result;
    }

    /**
     * 查询规则参考:http://apijson.cn/doc/zh/grammar.html#%E6%9F%A5%E8%AF%A2
     *
     */
    async query(param: IQueryParam): Promise<{
        data: IZTeamCommit[];
        total: number
    }> {
        let [result, total] = await Promise.all([this.executeQuery(param), this.queryTotalCount(param.colCondition)])
        return {
            data: result['[]']?.map?.((item: any) => item.ZTeamCommit) || [],
            total
        };
    }


    /**
     * 查询规则参考:http://apijson.cn/doc/zh/grammar.html#%E6%9F%A5%E8%AF%A2
     *
     */
    async queryAll(condition: IQueryColCondition): Promise<IZTeamCommit[]> {
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
        return allResult.map((result: any) => result['[]']?.map?.((item: any) => item.ZTeamCommit) || [])?.reduce((pre, cur) => pre.concat(cur), []) || [];
    }

    /**
     *
     * @param colCondition
     */
    async queryTotalCount(colCondition?: IQueryColCondition): Promise<number> {
        let result = await this.httpClient.post(`/get`, {
            "[]": {
                "ZTeamCommit": {
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
        projectId?: number
    }) {
        return this.query({
            colCondition: {
                ...param
            }
        });
    }


    async queryAllByLinkId(param: {
        projectId?: number
    }) {
        return this.queryAll(param);
    }


    /**
     * 基本关联查询一次性处理；
     * @param param
     */
    private async executeQueryWithRel(param: IQueryParam): Promise<(IZTeamCommit & { projectInfo?: IZTeamGitProjects })[]> {
        let result = await this.httpClient.post(`/get`, {
            '[]': {
                page: param?.page || 0,
                count: param?.count || 50,
                ZTeamCommit: {
                    ...(param?.colCondition || {}),
                },

                ZTeamGitProjects: {
                    'old_id@': '/ZTeamCommit/projectId',
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
            let item = result['[]'][i] as IZTeamCommit;
            let newItem = {
                ...item.ZTeamCommit,
                projectInfo: item.ZTeamGitProjects, _projectInfo: item.ZTeamGitProjects
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
        data: (IZTeamCommit & { _projectInfo?: IZTeamGitProjects })[];
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
    ): Promise<IZTeamCommit[]> {
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


export interface IZTeamCommit {
    id?: number;// 唯一标识:
    old_id?: string;// old_id:
    userId?: number;// 租户id:
    authorName?: string;// name:
    authorEmail?: string;// email:
    additions?: string;// 添加行:
    deletions?: string;// 删除行:
    total?: string;// 总共修改行:
    title?: string;// title:
    message?: string;// message:
    projectId?: number;// project_id:
    projectName?: string;// 项目名称:
    branceName?: string;// 提交分支:
    commitedDate?: Date;// 提交时间:
    createdAt?: Date;// 创建时间:
    updateDate?: Date;// 更新时间:
    addDate?: Date;// 添加时间:

    [key: string]: any;
}


