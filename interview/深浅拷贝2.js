/**
 * Created by yuan on 2018/11/23.
 */
let a = {
    age: 1,
    jobs: {
        first: 'FE'
    }
}



//let b = Object.assign({},a) //浅拷贝
let b = {...a} //浅拷贝
//let b = JSON.parse(JSON.stringify(a)) //深拷贝
//lodash 的深拷贝函数。
a.age = 11
a.jobs.first = 'native'
console.log(b.age,b.jobs.first) // FE


function shallowClone(source) {
    if(!source || typeof source !== 'object'){
        throw new Error('error arguments')
    }
    var targetObj = source.constructor === Array ? []:{}
    for(var keys in source){
        if(source.hasOwnProperty(keys)){
            targetObj[keys] = source[keys]
        }
    }
    return targetObj
}

function deepClone(source) {
    if(!source || typeof source !== 'object'){
        throw new Error('error arguments')
    }
    var targetObj = source.constructor === Array ? []:{}

    for(var keys in source){
        if(source.hasOwnProperty(keys)){
            if(source[keys] && typeof source[keys] == 'object'){
                targetObj[keys] = source[keys].constructor === Array ? []:{}
                targetObj[keys] = deepClone(source[keys])
            }else{
                targetObj[keys] = source[keys]
            }
        }
    }
    return targetObj
}


var AA = [{name:{test:11}},2,3,{age:12}]
var BB = deepClone(AA);
BB[0].name.test = 22
console.log(BB);
console.log(AA);
