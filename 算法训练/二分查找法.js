/**
 * Created by yuanyuan on 2018/12/13.
 */
function bsearch(A, x) {
    let l = 0,
        r = A.length - 1,
        guess
    while (l <= r) {
        guess = Math.floor((l + r) / 2)
        //设置循环不变式
        //
        if (A[guess] === x) return guess
        else if (A[guess] > x) r = guess - 1
        else l = guess + 1
    }
    return -1
}


let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
console.log(bsearch(arr, 17));
console.log(bsearch(arr, 10));
console.log(bsearch(arr, 9));