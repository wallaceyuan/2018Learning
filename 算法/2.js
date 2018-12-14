/********************第 2 题**********************/
// 实现一个函数，可以对 url 中的 query 部分做拆解，返回一个 key - value 形式的 object
// 入参格式参考：
const url = "http://sample.com/?a=1&b=2&c=xx&d#hash";
// 出参格式参考：
const result = { a: "1", b: "2", c: "xx", d: "" };

/*
function querySearch(url) {
    var str = url.split("?")[1], items = str.split("&");
    var result = {};
    var arr;
    for (var i = 0; i < items.length; i++) {
        arr = items[i].split("#")[0].split("=");
        result[arr[0]] = arr[1]? arr[1]: "";
    }
    return result;
}
*/

function setByPath(obj, path, value="", d = 0) {
    if (d === path.length - 1) {
        obj[path[d]] = value;
        return;
    }
    if (typeof obj[path[d]] === "undefined") {
        const next = path[d + 1];
        obj[path[d]] = next.match(/^[0-9]+$/) ? [] : {};
    }
    setByPath(obj[path[d]], path, value="", d + 1);
}

function querySearch(url) {
    const regex = /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    const match = url.match(regex);

    const query = {};
    if (!match) {
        return query;
    }

    const queryStr = match[7];

    queryStr.split("&").map(kv => {
        const [key, value] = kv.split("=");
        const path = key.split(/[\[\]]/).filter(x => x);
        setByPath(query, path, value);
    });
    return query;
}



console.log(querySearch(url));