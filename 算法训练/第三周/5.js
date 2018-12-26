/**
 * Created by yuan on 2018/12/26.
 */
function in_array(A, x) {
    let arr  = []
    for (var i = 0; i < A.length; i++) {
        arr.push(A[i][0])
    }
    if(bsearch(arr, x) == -1){

    }
}


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



const A = [
    [1, 4, 8, 12],
    [2, 5, 9, 13],
    [3, 6, 10, 18],
    [8, 9, 13, 20],
]

in_array(A, 10) // true
in_array(A, 100) // false