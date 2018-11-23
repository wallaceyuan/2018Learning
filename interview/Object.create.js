/**
 * Created by yuan on 2018/11/23.
 */
var anotherObject = {
    name: '轩辕Rowboat'
};
var myObject = Object.create(anotherObject, {
    age: {value:18}
});

// 获得它的原型
Object.getPrototypeOf(anotherObject) === Object.prototype; // true 说明anotherObject的原型是Object.prototype
Object.getPrototypeOf(myObject); // {name: "轩辕Rowboat"} // 说明myObject的原型是{name: "轩辕Rowboat"}
myObject.hasOwnProperty('name'); // false; 说明name是原型上的。
console.log(myObject.hasOwnProperty('age')); // true 说明age是自身的
myObject.name; // '轩辕Rowboat'
myObject.age; // 18;

