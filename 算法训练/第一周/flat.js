/**
 * Created by yuan on 2018/12/12.
 */
function flat(A) {
    return A.reduce((p,n)=>{
        return Array.isArray(n)?p.concat(flat(n)):p.concat(n)
    },[])
}


console.log(flat([1, [2, 'a', [5, 6]], 8])); // [1,2,'a',5,6,8]
console.log(flat(['x', [[[['y']]]]])); // ['x', 'y']
console.log(flat([',', [''], ','])); // [',', '', ',']