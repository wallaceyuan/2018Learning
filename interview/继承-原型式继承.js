/**
 * Created by yuan on 2018/12/4.
 */



/*没有必要兴师动众创建构造函数
包含引用类型的值的属性始终都会共享响应的值*/

function object(o) {
    function F() {}
    F.prototype = o
    return new F();
}

var person = {
    name:'Nicholas',
    friends:["Shelby","Court","Van"]
}

var anotherPerson = object(person)
anotherPerson.name = 'Greg'
anotherPerson.friends.push('Rob')


var yetAnotherPerson = Object.create(person,{
    name:{
        value:'Greg'
    }
})
console.log(yetAnotherPerson.name);//Greg
yetAnotherPerson.friends.push('Barbie')


console.log(person.friends)//[ 'Shelby', 'Court', 'Van', 'Rob', 'Barbie' ]
