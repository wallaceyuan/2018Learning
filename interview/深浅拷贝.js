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

