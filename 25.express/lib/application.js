const Router = require('./router')
const http = require('http')

function Application() {

}

Application.prototype.lazyrouter = function () {
    if(!this._router){
        this._router = new Router()
    }
}
Application.prototype.get = function (path, handler) {
    this.lazyrouter()
    this._router.get(path,handler)
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