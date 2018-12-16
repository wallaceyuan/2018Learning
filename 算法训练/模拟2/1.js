/**
 * 列表求交集
 * @param {*} A 列表1
 * @param {*} B 列表2
 */
/*
 function join(A, B) {
 let m = []
 while(A.length){
 let a = A.shift()
 if(B.includes(a)) m.push(a)
 }
 return m
 }
 */

function join(A, B) {
    A.sort((a, b)=>a - b);
    B.sort((a, b)=>a - b)
    var dd = [];
    var s1 = 0;
    var s2 = 0;
    while (s1 < A.length && s2 < B.length) {
        if (A[s1] == B[s2]) {
            dd.push(A[s1]);
            s1++;
            s2++;
        }else {
            s1++;
        }
    }
    return dd
}
function quickSort(arr, q) {
    return arr.includes(q)
}


console.log(join(['a', 'bc', 'ce', 'd'], ['bc', 'ce', 'e', 'f']));




