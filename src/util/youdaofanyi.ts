let md5 = require('js-md5');

export function toFanyiUrl(t: string) {
    var s = "mdictweb"
        , o = (new Date).getTime() + ""
        , r = "ydsecret://mdictweb.si/sign/-eV=8}L$s4$nPL00op3p]"
        , i = t
        , c = "".concat(s).concat(o).concat(r).concat(i)
        , l = md5(c);
// debugger;
    let from = 'zh-CHS', to = 'en', type = '1';
    // to='en';
    var u = "http://webtrans.yodao.com/server/webtrans/tranUrl?url=".concat(encodeURIComponent(t), "&from=")
        .concat(from, "&to=")
        .concat(to, "&type=")
        .concat(type, "&product=mdictweb&salt=")
        .concat(o, "&sign=").concat(l);
    return u;
}

// http://webtrans.yodao.com/server/webtrans/tranUrl?url=https%3A%2F%2Fgithub.com%2F&from=en&to=en&type=1&product=mdictweb&salt=1675331586657&sign=27cd12275801fb33dc71713b2424e0bd

console.info(toFanyiUrl("https://github.com/search?q=created:2020-12-30+stars:100..101&type=Repositories&ref=advsearch"));
