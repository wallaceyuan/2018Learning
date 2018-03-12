const Router = require('./router')
const http = require('http')
const methods = require('methods')
const slice = Array.prototype.slice

function Application() {

}

Application.prototype.lazyrouter = function () {
    if(!this._router){
        this._router = new Router()
    }
}

methods.forEach(function (method) {
    Application.prototype[method] = function () {
        this.lazyrouter()

        this._router[method].apply(this._router,slice.call(arguments))// 支持多个处理函数 [ '/', [Function], [Function] ]  this._router.get(path,handler)
        return this
    }
})

Application.prototype.route = function (path) {
    this.lazyrouter();
    //创建一个路由，然后创建一个layer ,layer.route = route.this.stack.push(layer)
    this._router.route(path);
}

Application.prototype.use = function () {
    this.lazyrouter()
    this._router.use.apply(this._router,arguments)
}

Application.prototype.listen = function () {
    let self = this
    let server = http.createServer(function (req, res) {
        function done() {//如果没有任何路由规则匹配的话会走此函数
            res.end(`Cannot ${req.method} ${req.url}`);
        }
        self._router.handle(req,res,done)
    })
    server.listen(...arguments)
}

module.exports = Application