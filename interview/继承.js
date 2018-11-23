/**
 * Created by yuan on 2018/11/23.
 */
//ES5 继承
function Super() {}

Super.prototype.getNumber = function() {
    return 1
}

function Sub(){}

Sub.prototype = Object.create(Super.prototype,{
    constructor:{
        value:Sub,
        enumerable:false,
        writable:true,
        configurable:true,
    }
})

var s = new Sub()
console.log(s.getNumber());//1




//ES6
class MyDate extends Date{
    test(){
        return this.getTime()
    }
}

let myDate = new MyDate()
console.log(myDate.test());


//

function MyData() {
    
}

MyData.prototype.test = function () {
    return this.getTime()
}

let d = new Date()

Object.setPrototypeOf(d,MyData.prototype)
Object.setPrototypeOf(MyData.prototype, Date.prototype)

