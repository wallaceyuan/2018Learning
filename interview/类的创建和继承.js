/**
 * Created by yuanyuan on 2018/11/24.
 */

function Animal(name) {
    this.name = name || 'Animal'
    this.sleep = function (status) {
        console.log(this.name + '正在睡觉' + status)
    }
}

Animal.prototype.eat = function (food) {
    console.log(this.name + '正在吃:' + food)
}

//1.原型链继承  只能访问原型链上的方法 继承对象本身的方法无法访问
function Cat() {
    this.run = function () {
        console.log('run')
    }
}

Cat.prototype = new Animal('cat')

var cat = new Cat()
console.log(cat.name)
cat.eat('fish')//cat正在吃:fish
cat.sleep('开心');//cat正在睡觉
cat.run()
console.log(cat instanceof Animal); //true
console.log(cat instanceof Cat); //true


/*function Cat2() {   //ct2构造
    this.weight = 60;
}
Cat2.prototype = new Cat();//继续原型链继承
Cat2.prototype.name = 'cat2'
var cat2 = new Cat2()
console.log(cat2.name)
cat2.eat('fish2')//cat正在吃:fish
console.log(cat2.weight);*/


//2.构造函数（类式继承）
/*function Pig() {
    Animal.call(this, 'pig')
}
var pig = new Pig()
console.log(pig.name)
pig.sleep();//pig正在睡觉
pig.eat('糠'); //undefined


//2.类式继承（构造函数间的继承）
function Dog(name) {
    Animal.call(this)
    this.name = name || 'Tom'
}
Dog.prototype = new Animal()
var dog = new Dog()
console.log(dog.name);
dog.sleep();*/

//console.log(dog.eat()); 只能继承父类的属性和方法 不能继承原型链上的
//完善方法是 原型链+借用构造函数  Dog.prototype = new Animal()

/*console.log(dog instanceof Animal); // true
console.log(dog instanceof Dog); // true*/

/*
 组合式继承是js最常用的继承模式，但组合继承的超类型在使用过程中会被调用两次；
 一次是创建子类型的时候，另一次是在子类型构造函数的内部
 */
