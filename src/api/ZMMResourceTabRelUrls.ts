import {IHttpClient} from "./http";
import {IQueryColCondition, IQueryParam, IResult} from "./ApiJSON.types";
import {IZMMResourceTab} from "./ZMMResourceTab";
import {IZMMResourceUrl} from "./ZMMResourceUrl";

//import
/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2022/10/5
 **/
export class ZMMResourceTabRelUrls {

    static build(httpClient: IHttpClient) {
        return new ZMMResourceTabRelUrls(httpClient);
    }

    constructor(public httpClient: IHttpClient) {
    }

    /**
     * 添加
     * @param colInfo
     */
    async add(colInfo: IZMMResourceTabRelUrls): Promise<{
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
            "ZMMResourceTabRelUrls": {
                ...colInfo,
            },
            "tag": "ZMMResourceTabRelUrls"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZMMResourceTabRelUrls as any;
    }

    /**
     * 添加
     * @param colInfo
     */
    async addBatch(colInfo: IZMMResourceTabRelUrls[]): Promise<{
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
            "ZMMResourceTabRelUrls[]": colInfo,
            "tag": "ZMMResourceTabRelUrls[]"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZMMResourceTabRelUrls as any;
    }

    /**
     * 获取节点
     * @param id
     */
    async get(id: number): Promise<IZMMResourceTabRelUrls> {
        let result = await this.httpClient.post(`/get`, {
            "ZMMResourceTabRelUrls": {
                id: id
            }
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }
        return result.ZMMResourceTabRelUrls as any;
    }

    /**
     * 从数据库字段类型到前端类型
     * @param item
     */
    fromDb(item: Partial<IZMMResourceTabRelUrls>): IZMMResourceTabRelUrls {
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
    toDb(item: Partial<IZMMResourceTabRelUrls>): IZMMResourceTabRelUrls {
        //slot toDb
        return item as any;
    }


    async update(item: Partial<IZMMResourceTabRelUrls>): Promise<{
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
            "ZMMResourceTabRelUrls": {
                ...item,
            },
            "tag": "ZMMResourceTabRelUrls"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZMMResourceTabRelUrls as any;
    }

    /**
     * https://github.com/Tencent/APIJSON/blob/master/Document.md
     *
     * @param modifyColInfo
     */
    async updateBatch(ids: number[], modifyColInfo: IZMMResourceTabRelUrls) {
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
            "ZMMResourceTabRelUrls": {
                "id{}": ids,
                ...modifyColInfo,
            },
            "tag": "ZMMResourceTabRelUrls[]"
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
            ZMMResourceTabRelUrls: {
                ...condition
            },
            tag: "ZMMResourceTabRelUrls[]"
        });
        if (result.ok === false) {
            throw new Error(result.msg);
        }
        return result.ZMMResourceTabRelUrls.count;
    }


    /**
     * 查询数量；
     * @param condition
     */
    async countByCol(condition: IQueryColCondition) {
        let result = await this.httpClient.post(`/head`, {
            "ZMMResourceTabRelUrls": {
                ...condition,
            }
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }
        return result.ZMMResourceTabRelUrls.count as any;

    }

    private async executeQuery(param: IQueryParam): Promise<{
        '[]': {
            ZMMResourceTabRelUrls: IZMMResourceTabRelUrls;
            [key: string]: any
        }
    }[]> {
        //slot executeQuery
        let result = await this.httpClient.post(`/get`, {
            "[]": {
                ZMMResourceTabRelUrls: {
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
        result['[]']?.ZMMResourceTabRelUrls?.forEach(item => {
            if (item["addDate"]) {
                //@ts-ignore
                item["addDate"] = new Date(item["addDate"]);
            }
        })

        result['[]']?.ZMMResourceTabRelUrls?.forEach(item => {
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
        data: IZMMResourceTabRelUrls[];
        total: number
    }> {
        let [result, total] = await Promise.all([this.executeQuery(param), this.queryTotalCount(param.colCondition)])
        return {
            data: result['[]']?.map?.((item: any) => item.ZMMResourceTabRelUrls) || [],
            total
        };
    }


    /**
     * 查询规则参考:http://apijson.cn/doc/zh/grammar.html#%E6%9F%A5%E8%AF%A2
     *
     */
    async queryAll(condition: IQueryColCondition): Promise<IZMMResourceTabRelUrls[]> {
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
        return allResult.map((result: any) => result['[]']?.map?.((item: any) => item.ZMMResourceTabRelUrls) || [])?.reduce((pre, cur) => pre.concat(cur), []) || [];
    }

    /**
     *
     * @param colCondition
     */
    async queryTotalCount(colCondition?: IQueryColCondition): Promise<number> {
        let result = await this.httpClient.post(`/get`, {
            "[]": {
                "ZMMResourceTabRelUrls": {
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
        tabId?: number; urlID?: number
    }) {
        return this.query({
            colCondition: {
                ...param
            }
        });
    }


    async queryAllByLinkId(param: {
        tabId?: number; urlID?: number
    }) {
        return this.queryAll(param);
    }


    /**
     * 基本关联查询一次性处理；
     * @param param
     */
    private async executeQueryWithRel(param: IQueryParam): Promise<(IZMMResourceTabRelUrls & { tabInfo?: IZMMResourceTab; urlInfo?: IZMMResourceUrl })[]> {
        let result = await this.httpClient.post(`/get`, {
            '[]': {
                page: param?.page || 0,
                count: param?.count || 50,
                ZMMResourceTabRelUrls: {
                    ...(param?.colCondition || {}),
                },

                ZMMResourceTab: {
                    'id@': '/ZMMResourceTabRelUrls/tabId',
                }
                ,

                ZMMResourceUrl: {
                    'id@': '/ZMMResourceTabRelUrls/urlID',
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
            let item = result['[]'][i] as IZMMResourceTabRelUrls;
            let newItem = {
                ...item.ZMMResourceTabRelUrls,
                tabInfo: item.ZMMResourceTab, _tabInfo: item.ZMMResourceTab,
                urlInfo: item.ZMMResourceUrl, _urlInfo: item.ZMMResourceUrl
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
        data: (IZMMResourceTabRelUrls & { _tabInfo?: IZMMResourceTab, _urlInfo?: IZMMResourceUrl })[];
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
    ): Promise<IZMMResourceTabRelUrls[]> {
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


export interface IZMMResourceTabRelUrls {
    id?: number;// 唯一标识:
    userId?: number;// 用户id:
    tabId?: number;// tabID:
    urlID?: number;// urlID:
    updateDate?: Date;// 更新时间:
    addDate?: Date;// 添加时间:

    [key: string]: any;
}


