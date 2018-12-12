/**
 * Created by yuan on 2018/12/12.
 */
function special(A) {
    return A.filter(s=> Array(4).fill(1).reduce((p,n,i)=>p+= A[i]==null?n:A[i],0)% 2? s % 2 == 0 : s % 2 == 1)[0]
}

console.log(special([2, 4, 0, 100, 4, 11, 2602, 36])); // 11 唯一的奇数

console.log(special([160, 3, 1719, 19, 11, 13, -21])); // 160 唯一的偶数

console.log(special([1, 3, 2]))


console.log(special([2,4,0,100,4,11,2602,36]))


