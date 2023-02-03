export interface IResult {
    ok: boolean;
    code: 200 | 417 | 500;
    msg: string;
    "debug:info|help": string;
    "sql:generate|cache|execute|maxExecute": string;
    "depth:count|max": string;
    "time:start|duration|end|parse|sql": string;

    [key: string]: any;
}

export interface IQueryColCondition {

    // json数组包含查询 "praiseUserIdList<>": 82001,
    //  id字段是某个值 "id{}": [12, 15, 32],
    //  id字段在某个范围  "id&{}":">=300,<=400" =>  (ID >= 300 AND ID <= 500)
    //          "id|{}":"<=300,>=400"和"id{}":"<=300,>=400"等价。
    //          "id!{}":[12,15,32]表示id不在 12，15，32 内的其他数据。
    //  模糊查询 "content$": "%APIJSON%",
    // keyword%，以keyword开头的字符串。
    // %keyword，以keyword结束的字符串。
    // %keyword%，包含keyword的字符串，如：keyword123、123keyword、123keyword123
    // %k%e%y%，包含字母k,e,y的字符串
    // 还有几种比较便捷的方式，我们这里如果使用"content~":"keyword"来代替"content$":"%keyword%"，同样可以表示包含某字符串。
    //正则匹配   "content?": "^[0-9]+$",

    // "key{}":"!=null"  is not null
    //时间范围：    'addDate>':`YYYY-MM-DD` 'addDate<': `YYYY-MM-DD`

    // @combine  https://github.com/Tencent/APIJSON/blob/master/Document.md
    //"name~":"a",  "tag~":"a",  "@combine":"name~ | tag~"    对应SQL是name REGEXP 'a' OR tag REGEXP 'a'


    //返回列名称col names: "id,date,content,praiseUserIdList"
    '@column'?: string;
    // date-,id,content+  date-表示将date字段降序排列
    '@order'?: string;


    [key: string]: any;
}

/**
 * @desc
 *
 * @使用场景
 *
 * @coder.yang2010@gmail.com
 * @Date    2022/10/5
 **/
export interface IQueryParam {
    colCondition?: IQueryColCondition;
    page?: number;
    query?: 1 | 2;
    //最多100条数据
    count?: number;
}


