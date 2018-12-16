
const A = [2,4,7,9,13]
const x = 8

const b = A.find(a=>a>x)
const idx = A.indexOf(b)

/*A.splice(idx === -1?A.length:idx,0,x)
console.log(A)*/


function insert(A,x) {
    //循环不变式
    //p 指向下一个需要比较的元素
    //p+1 指向空位
    p = A.length - 1
    while(p && A[p] > x ){
        A[p+1] = A[p]
        p--
    }
    A[p+1] = x
    return A
}

function insert2(A,i,x) {
    //循环不变式
    //p 指向下一个需要比较的元素
    //p+1 指向空位
    let p = i - 1
    while(p>=0 && A[p] > x ){
        A[p+1] = A[p]
        p--
    }
    A[p+1] = x
}

//console.log(insert(A, x));

function insertion_sort(A) {
    for(let i = 1;i<A.length;i++){
        insert2(A,i,A[i])
    }
}

const B = [5,8,1,3,4,9]
insertion_sort(B)
console.log(B)