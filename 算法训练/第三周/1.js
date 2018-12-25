/**
 * Created by yuanyuan on 2018/12/25.
 */
function fibo(a1, a2, n) {
    if(n <=1) return a1
    return fibo(a2,a1+a2,n-1)
}


console.log(fibo(5, 8, 3));// 13
console.log(fibo(5, 8, 1));// 5