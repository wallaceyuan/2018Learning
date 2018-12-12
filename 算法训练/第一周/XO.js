/**
 * Created by yuanyuan on 2018/12/11.
 */

function XO(s) {
    let a= 0,b = 0,d
    Array.from(s, (v) => {
        d = v.toLowerCase()
        d == 'o'?a++:d == 'x'?b++:''
    })
    return a == b
}

console.log(XO("ooxx")); //true
console.log(XO("xooxx")); //false
console.log(XO("ooxXm")); //true
console.log(XO("zpzpzpp")); //true // 没有x也没有o，所有相等，都为0
console.log(XO("zzoo")); //false