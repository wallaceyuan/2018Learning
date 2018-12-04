/**
 * Created by yuan on 2018/12/4.
 */
function SuperType(name){
    this.name = name
    this.colors = ['red','blue','green']
}

SuperType.prototype.sayName = function () {
    console.log(this.name)
}


function SubType(name,age) {
    SuperType.call(this,name)
    this.age = age
}

SubType.prototype = new SuperType()
SubType.prototype.sayAge = function () {
    console.log(this.age)
}


var instance1 = new SubType('Nicholas',29)
instance1.colors.push('color')
instance1.sayName()
instance1.sayAge()
console.log(instance1.colors);


var instance2 = new SubType('Greg',21)
instance2.sayName()
instance2.sayAge()
console.log(instance2.colors);