/**
 * Created by yuan on 2018/11/30.
 */
Function.prototype.a = 'a';
Object.prototype.b = 'b';
function Person() {
};
var p = new Person();
console.log('p.a: ' + p.a); //undefined
console.log('p.b: ' + p.b);
console.log(((p.__proto__).__proto__).__proto__) //null


async function async1() {
    console.log("a");
    await  async2(); //执行这一句后，await会让出当前线程，将后面的代码加到任务队列中，然后继续执行函数后面的同步代码
    console.log("b");
}
async function async2() {
    console.log('c');
}
console.log("d");
setTimeout(function () {
    console.log("e");
}, 0);
async1();
new Promise(function (resolve) {
    console.log("f");
    resolve();
}).then(function () {
    console.log("g");
});

//d a c f b g e

var aaa = [1, 'name']
console.log(Array.isArray(aaa)) //true

Array.prototype.isPrototypeOf(aaa);


//1.已知数据结构users，请实现语法支持user.unique能够按照name字段去重，并输出结构为：["a","b"]
var users = [{
    id: 1, name: "a"
}, {
    id: 2, name: "a"
}, {
    id: 3, name: "b"
}, {
    id: 4, name: "v"
}]


Array.prototype.unique = function () {
    let arrList = this
    let box = []
    arrList.map(arr =>box.indexOf(arr.name) == -1 ? box.push(arr.name) : '')
    return box
}

console.log(users.unique());



const man={
    name:'jscoder',
    age:22
}
//补全代码
const proxy = new Proxy(man,{
    get:function (target, property) {
        if(target.hasOwnProperty(property)){
            return target[property]
        }else{
            throw new ReferenceError(`Property ${property} does not exist.`);
        }
    }
})
console.log(proxy.name); //"jscoder"
console.log(proxy.age); //22
console.log(proxy.location); //Property "$(property)" does not exist



//样例数据
/*
let demoNode = ({
    tagName: 'ul',
    props: {'class': 'list'},
    children: [
        ({tagName: 'li', children: ['douyin']}),
        ({tagName: 'li', children: ['toutiao']})
    ]
});
*/

`<ul class="list"><li><douyin/li><li>toutiao</li></ul>`


