/**
 * Created by yuan on 2018/12/4.
 */
function Person(name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ['Shelby','Court']
    if(typeof this.sayName != "function"){
        Person.propTypes.sayName = function () {
            console.log(this.name)
        }
    }
}

var person1 = new Person('Nicholas',29,'Software En')
var person2 = new Person('Greg',27,'Doctor')

person1.friends.push('Van')

console.log(person1.friends === person2.friends);
console.log(person1.sayName());
