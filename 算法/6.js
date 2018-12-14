/**
 * Created by yuan on 2018/12/14.
 */
/********************第 6 题**********************/
// 实现findFibonacci函数，在一堆正整数中，找到最长的一组斐波那契数列段
// 斐波那契数列：一个递增的正整数数列，从第三位起，每个数字都是前两位数字之和，不一定要从 1 开始
// 入参格式参考：
const inputArr = [13, 9, 3, 8, 5, 25, 31, 11, 21];

// 出参格式参考：
const sequence = [3, 5, 8, 13, 21];
//[ 3, 5, 8, 9, 11, 13, 21, 25, 31 ]
/*function findFibonacci(arr) {
 let a = arr.sort(function(a,b){return a>b?1:-1})
 console.log(a);
 let fibArr = fib(arr.length-1, a[0], a[1],[a[0],a[1]])
 for(var i = 0;i<a.length;i++){
 for(var j = 0 ; j< fibArr.lengtn;i++){

 }
 }
 console.log(fibArr);
 }*/

function findFibonacci(arr) {
    // 排序，从小到大
    arr.sort((x, y) => x - y)
    /* 建立数值索引 */
    const m = []
    arr.forEach((x, i) => {
        return m[x] = i
    })

    const dp = []
    // 初始化
    for (let i = 0; i < arr.length; i++) {
        dp[i] = []
        for (let j = 0; j < arr.length; j++) {
            dp[i][j] = (i === j) ? 1 : 2
        }
    }
    let max = 0
    let b = 0
    let a = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            //[ 3, 5, 8, 9, 11, 13, 21, 25, 31 ]
            const s = arr[i] + arr[j]
            const k = m[s]
            if (k !== undefined) {
                dp[j][k] = Math.max(dp[j][k], dp[i][j] + 1)
                if (dp[j][k] > max) {
                    max = dp[j][k]
                    b = arr[k]
                    a = arr[j]
                }
            }
        }
    }

    // 构造结果
    let r = [b, a]
    for (let i = 0; i < max - 2; i++) {
        [a, b] = [b - a, a]
        r.push(a)
    }

    r.reverse()
    return r
}

function fib(n, a = 1, b = 1, arr = []) {
    if (n <= 1) return arr
    return fib(n - 1, b, a + b, [...arr, a + b])
}

console.log(findFibonacci(inputArr));