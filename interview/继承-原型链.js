/**
 * Created by yuan on 2018/12/4.
 */



//原型链方法 无法像超类传递参数  引用类型值所带来的问题
function SuperType(param){
    this.test = param
    this.prototype = true
    this.colors = ['red','blue','green']
}

function SubType() {
    
}

SubType.prototype = new SuperType()

var instance1 = new SubType()

console.log('instance1',instance1)


instance1.colors.push('black')
console.log(instance1.colors)
console.log(instance1.test)


var instance2 = new SubType()
console.log(instance2.colors)
console.log(instance1.test)
