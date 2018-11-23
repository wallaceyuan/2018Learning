//bind返回一个新函数

Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    var _this = this
    var args = [...arguments].slice(1)
    return function F() {
        // 因为返回了一个函数，我们可以 new F()，所以需要判断
        if (this instanceof F) {
            console.log('...args, ...arguments',...args, ...arguments)
            return new _this(...args, ...arguments)
        }
        return _this.apply(context, args.concat(...arguments))
    }
}

var module = {
    x: 42,
    name: 'yy',
    getX: function () {
        return {
            x: this.x,
            name: this.name
        }
    }
}

function original(a, b) {
    console.log('this', this); // original {}
    console.log('typeof this', typeof this); // object
    this.name = b;
    console.log('name', this.name); // 2
    console.log('this', this);  // original {name: 2}
    console.log([a, b]); // 1, 2
}


var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.myBind(module);
console.log(boundGetX());
// expected output: 42
console.log('=====')

var newOrigin = original.myBind(module,1,2)
var newObj = new newOrigin()

console.log('newObj',newObj);