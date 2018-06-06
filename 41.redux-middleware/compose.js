/**
 * Created by yuan on 2018/6/6.
 */
function add1(str){
    return str+1;
}
function add2(str){
    return str+2;
}
function add3(str){
    return str+3;
}

function compose1(...fns) {
   return function (...args) {
       let last = fns.pop()
       return fns.reduceRight((val,fn)=>{
           return fn(val)
       },last(...args))
   }
}

function compose(...fns) {
    if(fns.length==1)
        return fns[0];
    return fns.reduce((a,b)=>(...args)=>a(b(...args)))
}

let add = compose(add3,add2,add1);
let r = add("zfpx")

console.log(r)