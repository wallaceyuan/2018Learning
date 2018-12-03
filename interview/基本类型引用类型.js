/**
 * Created by yuan on 2018/11/30.
 */
//基本类型

//undefined null boolen String Number Symbol
//基本类型的变量是存放在栈内存（Stack）里的

var a,b;
a = "zyj";
b = a;
console.log(a);   // zyj
console.log(b);   // zyj
a = "呵呵";       // 改变 a 的值，并不影响 b 的值
console.log(a);   // 呵呵
console.log(b);   // zyj


//引用类型

//Object Array Date RegExp Function
//引用类型的值是保存在堆内存（Heap）中的对象（Object）