/**
 * Created by yuanyuan on 2018/12/7.
 */

const inputFuncStr = "function a () { console.log('transfer') }";
// 出参格式参考1：
const outputFuncStr = "const a = () => { console.log('transfer') }";

function transfer(inputFuncStr) {
    return inputFuncStr.replace(
        /function\s+([^() ]+)\s*\(([^() ]*)\)(.*)/,
        "const $1 = ($2) =>$3"
    );
}

console.log(transfer(outputFuncStr));


//减1法

//尾递归


//大整数排序