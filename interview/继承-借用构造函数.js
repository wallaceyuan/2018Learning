/**
 * Created by yuan on 2018/12/4.
 */

/*
    借用构造函数,可以向超类中传递参数
    但是只能访问构造函数上的方法和属性
    原型链上的方法属性无法获得
*/


function SuperType(name){
    this.name = name
    this.colors = ['red','blue','green']
}


SuperType.prototype.getColor = function () {
    return this.colors
}

function SubType() {
    SuperType.call(this,'Nicholas')
    this.age = 29
}

var instance1 = new SubType()
instance1.colors.push('black')
console.log(instance1.colors) //[ 'red', 'blue', 'green', 'black' ]
console.log(instance1.name)
console.log(instance1.age)
console.log(instance1.getColor())


var instance2 = new SubType()
console.log(instance2.colors)//[ 'red', 'blue', 'green' ]
console.log(instance2.name)
