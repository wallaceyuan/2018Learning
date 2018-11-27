/**
 * Created by yuanyuan on 2018/11/24.
 */
function Animal(name) {
    this.name = name || 'Animal'
    this.sleep = function () {
        console.log(this.name + '正在睡觉')
    }
}

Animal.prototype.eat = function (food) {
    console.log(this.name + '正在吃:'+ food)
}

//原型链继承
/*function Cat() {}

Cat.prototype = new Animal()
Cat.prototype.name = 'cat'

var cat = new Cat()
console.log(cat.name)
console.log(cat.eat('fish'))
console.log(cat.sleep());
console.log(cat instanceof Animal); //true
console.log(cat instanceof Cat); //true*/


//构造继承
function Dog(name) {
    Animal.call(this)
    this.name = name || 'Tom'
}

var dog = new Dog()
console.log(dog.name);
console.log(dog.sleep());
//console.log(dog.eat()); 只能继承父类的属性和方法 不能继承原型链上的
console.log(dog instanceof Animal); // false
console.log(dog instanceof Dog); // true


