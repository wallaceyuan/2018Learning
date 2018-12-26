/**
 * Created by yuan on 2018/12/26.
 */
function sort(A) {
    if (A.length < 1) {
        return A
    }
    let leftArr = []
    let rightArr = []
    let q = A[0]
    for (let i = 1; i < A.length; i++) {
        if (A[i] > q) {
            rightArr.push(A[i])
        } else {
            leftArr.push(A[i])
        }
    }
    return [].concat(sort(leftArr), [q], sort(rightArr))
}
console.log(sort([1, 2, 3, 5, 4, 6])); // [1,2,3,4,5,6]
