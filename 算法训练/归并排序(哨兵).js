/**
 * Created by yuan on 2018/12/27.
 */



function merge(A, p, q, r) {
    let A1 = A.slice(p, q)
    let A2 = A.slice(q, r)

    A1.push(Number.MAX_SAFE_INTEGER)
    A2.push(Number.MAX_SAFE_INTEGER)

    for (let k = p, i = 0, j = 0; k < r; k++) {
        /*
         循环不变式
         i:指向A1中下一个要被放回的元素
         j:指向A2中下一个要被放回的元素
         k:指向A中下一个会写的位置
         */
        A[k] = A1[i] < A2[j] ? A1[i++] : A2[j++]
    }
}
const A = [1, 3, 5, 2, 4, 6]
const B = [2, 4, 6, 1, 3, 5]
const C = [2, 1]


merge(A, 0, 3, 6)
merge(B, 1, 3, 5)
merge(C, 0, 1, 2)

console.log(A)
console.log(B)
console.log(C)





