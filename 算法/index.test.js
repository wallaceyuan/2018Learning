/**
 * Created by yuan on 2018/12/14.
 */

const chai = require('chai');
const { assert, expect, should } = chai;

function add(x, y) {
    return x + y;
}
describe('add 函数的测试', function () {
    it('1 加 1 应该等于 2', function () {
        expect(add(1, 1)).to.be.equal(2);
    });
});

function querySearch(url) {
    var str = url.split("?")[1],
        items = str.split("&");
    var result = {};
    var arr;
    for (var i = 0; i < items.length; i++) {
        arr = items[i].split("#")[0].split("=");
        result[arr[0]] = arr[1] ? arr[1] : "";
    }
    return result;
}

describe('querySearch 函数的测试', function () {
    it('1 加 1 应该等于 2', function () {
        expect(querySearch('http://sample.com/?a=1&b=2&c=xx&d#hash')).to.be.equal({ a: "1", b: "2", c: "xx", d: "" });
    });
});