/**
 * Created by yuan on 2018/12/5.
 */
/*function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);*/

class Point {
    static hello() {//最后，父类的静态方法，也会被子类继承。
        console.log('hello world');
    }
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString(){
        return '(' + this.x + ',' + this.y + ')';
    }
}
//在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。
// 这是因为子类实例的构建，基于父类实例，只有super方法才能调用父类实例。
// Must call super constructor in derived class before accessing 'this' or returning from derived constructor
class ColorPoint extends Point {
    constructor(x,y,color) {
        super(x,y)
        this.color = color;
    }
}

let cp = new ColorPoint(1,2,'green')

console.log(cp.toString());