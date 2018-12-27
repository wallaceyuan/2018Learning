/**
 * Created by yuan on 2018/12/26.
 */
//左边的值比右边小 上边的值比下边小

function in_array(A, x) {
    let vl = 0, mr = A[0].length - 1
    while ( vl <= A.length -1 && mr >=0 ) {
        if (A[vl][mr] === x) {
            return true
        }
        else if (A[vl][mr] > x) {
            --mr
        } else {
            vl++
        }
    }
    return false
}
const A = [
    [1, 4, 8, 12, 26],
    [2, 5, 9, 13, 28],
    [3, 6, 10, 18, 29],
    [8, 9, 13, 20, 30],
]


console.log(in_array(A, 29)); // true
//console.log(in_array(A, 100)); // false
