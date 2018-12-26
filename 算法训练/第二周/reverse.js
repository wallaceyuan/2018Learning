/**
 * Created by yuan on 2018/12/17.
 */
function reverse(A) {
    A.map((a,i)=>{
        if(i<Math.floor(A.length/2)) swap(A,i,A.length-1-i)
    })
/*    for(let i = 0,l = Math.floor(A.length/2);i<l;i++){
        swap(A,i,A.length-1-i)
    }*/
    return A
}

function swap(A,i,j) {
    const t = A[i]
    A[i] = A[j]
    A[j] = t
}

console.log(reverse([3, 2, 1]));
