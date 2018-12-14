//==============================答题部分 start==============================

/********************第 1 题**********************/
// 用正则实现一个简单的 function 转换功能
// 将普通的函数声明方式，转化为 es6 语法的匿名函数声明
// 不用考虑闭包、特殊符号、函数上下文等边际情况

// 入参格式参考1：
const inputFuncStr = "function a () { console.log('transfer') }";
// 出参格式参考1：
const outputFuncStr = "const a = () => { console.log('transfer') }";

function transfer() {
    /**
     * 此处写代码逻辑
     */
}

/********************第 2 题**********************/
// 实现一个函数，可以对 url 中的 query 部分做拆解，返回一个 key - value 形式的 object
// 入参格式参考：
const url = "http://sample.com/?a=1&b=2&c=xx&d#hash";
// 出参格式参考：
const result = { a: "1", b: "2", c: "xx", d: "" };

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

/********************第 3 题**********************/
// 实现一个 arrange 函数，可以进行时间和工作调度
// [ > … ] 表示调用函数后的打印内容

// arrange('William').execute();
// > William is notified

// arrange('William').do('commit').execute();
// > William is notified
// > Start to commit

// arrange('William').wait(5).do('commit').execute();
// > William is notified
// 等待 5 秒
// > Start to commit

// arrange('William').waitFirst(5).do('push').execute();
// 等待 5 秒
// > William is notified
// > Start to push

function arrange() {
    /**
     * 此处写代码逻辑
     */
}

/********************第 4 题**********************/
// 实现一个函数，可以将数组转化为树状数据结构
// 入参格式参考：
const arr = [
    { id: 1, name: "i1" },
    { id: 2, name: "i2", parentId: 1 },
    { id: 4, name: "i4", parentId: 3 },
    { id: 3, name: "i3", parentId: 2 },
    { id: 8, name: "i8", parentId: 7 }
];
// 出参格式可自行设计

function buildTree(arr) {
    /**
     * 此处写代码逻辑
     */
}

/********************第 5 题**********************/
// 实现一个函数，可以深拷贝一个对象，对象可能包含 function
// 入参格式参考：
const originObj = {
    a: {
        b: {
            c: [1, 5, 11, 23, 422]
        }
    },
    d: function() {
        console.log("hello world");
    }
};

function clone(originObj) {
    /**
     * 此处写代码逻辑
     */
}

/********************第 6 题**********************/
// 实现findFibonacci函数，在一堆正整数中，找到最长的一组斐波那契数列段
// 斐波那契数列：一个递增的正整数数列，从第三位起，每个数字都是前两位数字之和，不一定要从 1 开始
// 入参格式参考：
const inputArr = [13, 9, 3, 8, 5, 25, 31, 11, 21];

// 出参格式参考：
const sequence = [3, 5, 8, 13, 21];

function findFibonacci(arr) {
    /**
     * 此处写代码逻辑
     */
}
