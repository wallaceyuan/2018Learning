/**
 * Created by yuan on 2018/12/17.
 */
A=[1,2,3,4,5,6,7]

const A1=[]
const A2=[7]
const A3=[6,7]
console.log(rotate(A1, 1));
console.log(rotate(A2, 2));
console.log(rotate(A3, 3));

// A1 =  [7,1,2,3,4,5,6]
// A2 =  [6,7,1,2,3,4,5]
// A3 = [5,6,7,1,2,3,4]
// 依此类推
function rotate(A) {
    return A.concat(A.splice(0, A.length+1 - [...arguments][1]))
}