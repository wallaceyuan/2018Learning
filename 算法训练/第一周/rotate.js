/**
 * Created by yuanyuan on 2018/12/17.
 */
const A1=[1,2,3,4,5,6,7]
const A2=[1,2,3,4,5,6,7]
const A3=[1,2,3,4,5,6,7]
const A4=[1,2,3,4,5,6]
const A5=[1,2,3,4,5]
const A6=[1,2,3,4]
rotate(A1, 1)
rotate(A2, 2)
rotate(A3, 3)
rotate(A4, 1)
rotate(A5, 2)
rotate(A6, 3)


console.log(A1)
function rotate(A,i) {
    A.unshift(...A.splice(-i, i))
}