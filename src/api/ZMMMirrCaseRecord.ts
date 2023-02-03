import {IHttpClient} from "./http";
import {IQueryColCondition, IQueryParam, IResult} from "./ApiJSON.types";
import {IZMMMirrRecord} from "./ZMMMirrRecord";
import {IZMMMirrTag} from "./ZMMMirrTag";
import {ZMMMirrCaseRelTag} from "./ZMMMirrCaseRelTag";

//import
/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2022/10/5
 **/
export class ZMMMirrCaseRecord {

    static build(httpClient: IHttpClient) {
        return new ZMMMirrCaseRecord(httpClient);
    }

    constructor(public httpClient: IHttpClient) {
    }

    /**
     * 添加
     * @param colInfo
     */
    async add(colInfo: IZMMMirrCaseRecord): Promise<{
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
            "ZMMMirrCaseRecord": {
                ...colInfo,
            },
            "tag": "ZMMMirrCaseRecord"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZMMMirrCaseRecord as any;
    }

    /**
     * 添加
     * @param colInfo
     */
    async addBatch(colInfo: IZMMMirrCaseRecord[]): Promise<{
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
            "ZMMMirrCaseRecord[]": colInfo,
            "tag": "ZMMMirrCaseRecord[]"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZMMMirrCaseRecord as any;
    }

    /**
     * 获取节点
     * @param id
     */
    async get(id: number): Promise<IZMMMirrCaseRecord> {
        let result = await this.httpClient.post(`/get`, {
            "ZMMMirrCaseRecord": {
                id: id
            }
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }
        return result.ZMMMirrCaseRecord as any;
    }

    /**
     * 从数据库字段类型到前端类型
     * @param item
     */
    fromDb(item: Partial<IZMMMirrCaseRecord>): IZMMMirrCaseRecord {
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
    toDb(item: Partial<IZMMMirrCaseRecord>): IZMMMirrCaseRecord {
        //slot toDb
        return item as any;
    }


    async update(item: Partial<IZMMMirrCaseRecord>): Promise<{
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
            "ZMMMirrCaseRecord": {
                ...item,
            },
            "tag": "ZMMMirrCaseRecord"
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }

        return result.ZMMMirrCaseRecord as any;
    }

    /**
     * https://github.com/Tencent/APIJSON/blob/master/Document.md
     *
     * @param modifyColInfo
     */
    async updateBatch(ids: number[], modifyColInfo: IZMMMirrCaseRecord) {
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
            "ZMMMirrCaseRecord": {
                "id{}": ids,
                ...modifyColInfo,
            },
            "tag": "ZMMMirrCaseRecord[]"
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
            ZMMMirrCaseRecord: {
                ...condition
            },
            tag: "ZMMMirrCaseRecord[]"
        });
        if (result.ok === false) {
            throw new Error(result.msg);
        }
        return result.ZMMMirrCaseRecord.count;
    }


    /**
     * 查询数量；
     * @param condition
     */
    async countByCol(condition: IQueryColCondition) {
        let result = await this.httpClient.post(`/head`, {
            "ZMMMirrCaseRecord": {
                ...condition,
            }
        });

        if (result.code !== 200) {
            throw new Error(result.msg);
        }
        return result.ZMMMirrCaseRecord.count as any;

    }

    private async executeQuery(param: IQueryParam): Promise<{
        '[]': {
            ZMMMirrCaseRecord: IZMMMirrCaseRecord;
            [key: string]: any
        }
    }[]> {
        //slot executeQuery
        let result = await this.httpClient.post(`/get`, {
            "[]": {
                ZMMMirrCaseRecord: {
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
        result['[]']?.ZMMMirrCaseRecord?.forEach(item => {
            if (item["addDate"]) {
                //@ts-ignore
                item["addDate"] = new Date(item["addDate"]);
            }
        })

        result['[]']?.ZMMMirrCaseRecord?.forEach(item => {
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
        data: IZMMMirrCaseRecord[];
        total: number
    }> {
        let [result, total] = await Promise.all([this.executeQuery(param), this.queryTotalCount(param.colCondition)])
        return {
            data: result['[]']?.map?.((item: any) => item.ZMMMirrCaseRecord) || [],
            total
        };
    }


    /**
     * 查询规则参考:http://apijson.cn/doc/zh/grammar.html#%E6%9F%A5%E8%AF%A2
     *
     */
    async queryAll(condition: IQueryColCondition): Promise<IZMMMirrCaseRecord[]> {
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
        return allResult.map((result: any) => result['[]']?.map?.((item: any) => item.ZMMMirrCaseRecord) || [])?.reduce((pre, cur) => pre.concat(cur), []) || [];
    }

    /**
     *
     * @param colCondition
     */
    async queryTotalCount(colCondition?: IQueryColCondition): Promise<number> {
        let result = await this.httpClient.post(`/get`, {
            "[]": {
                "ZMMMirrCaseRecord": {
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
        recordId?: number
    }) {
        return this.query({
            colCondition: {
                ...param
            }
        });
    }


    async queryAllByLinkId(param: {
        recordId?: number
    }) {
        return this.queryAll(param);
    }


    /**
     * 基本关联查询一次性处理；
     * @param param
     */
    private async executeQueryWithRel(param: IQueryParam): Promise<(IZMMMirrCaseRecord & { recordInfo?: IZMMMirrRecord; _tags?: IZMMMirrTag })[]> {
        let result = await this.httpClient.post(`/get`, {
            '[]': {
                page: param?.page || 0,
                count: param?.count || 50,
                ZMMMirrCaseRecord: {
                    ...(param?.colCondition || {}),
                },

                ZMMMirrRecord: {
                    'id@': '/ZMMMirrCaseRecord/recordId',
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
            let item = result['[]'][i] as IZMMMirrCaseRecord;
            let newItem = {
                ...item.ZMMMirrCaseRecord,
                recordInfo: item.ZMMMirrRecord, _recordInfo: item.ZMMMirrRecord
            };
            idMap[newItem.id] = newItem;
            data.push(newItem);
        }

        let manyRelDatas;

        //处理多表查询的问题； 
        //// todo dong 2022/11/24   build 可以优化；
        if (Object.keys(idMap).length > 0) {
            manyRelDatas = await ZMMMirrCaseRelTag.build(
                this.httpClient,
            ).queryAllWithRel({
                colCondition: {
                    'caseId{}': Object.keys(idMap),
                },
            });
        }

        if (manyRelDatas?.length > 0) {
            for (let i = 0, iLen = manyRelDatas.length; i < iLen; i++) {
                let manyRelOne = manyRelDatas[i];
                if (idMap[manyRelOne.caseId]) {
                    if (!idMap[manyRelOne.caseId]._tags) {
                        idMap[manyRelOne.caseId]._tags = [];
                    }
                    idMap[manyRelOne.caseId]._tags.push(manyRelOne.tagInfo);
                }
            }
        }


        return data;
    }


    /**
     * 查询，并带上父级关联数据； 目前只处理一级的
     * @param param
     */
    async queryWithRel(param: IQueryParam): Promise<{
        data: (IZMMMirrCaseRecord & { _recordInfo?: IZMMMirrRecord })[];
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
    ): Promise<IZMMMirrCaseRecord[]> {
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


export interface IZMMMirrCaseRecord {
    id?: number;// 唯一标识:
    recordId?: number;// 对应的原始镜像id:
    userId?: number;// 用户id:
    area: string;// 地区:
    areaCode: string;// 地区编码:
    taxType?: string;// 税表类型:init：历史税表、sb：申报税表
    nsqxbm?: string;// 纳税期限:月 季 次 年 半年
    tableIndCode: string;// 表指标:
    tableIndName: string;// 表名称:
    qymc: string;// 企业名称:
    linkRelPath: string;// 访问相对连接:
    comment?: string;// 备注:
    updateDate?: Date;// 更新时间:
    addDate?: Date;// 添加时间:

    [key: string]: any;
}


