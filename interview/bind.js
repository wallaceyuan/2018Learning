
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
            return new _this(...args, ...arguments)
        }
        return _this.apply(context, args.concat(...arguments))
    }
}

var module = {
    x: 42,
    getX: function() {
        return this.x;
    }
}

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.myBind(module);
console.log(boundGetX());
// expected output: 42

