const http = require('http')

const Router = require('./router')

function Application(params) {
    this._router = new Router()
}

Application.prototype.get = function (path, handler) {
    this._router.get(path,handler)
}

Application.prototype.listen = function () {
    let self = this
    let server = http.createServer(function (req, res) {
        this._router.handler(req,res,done)
    })
    server.listen.apply(server, arguments)
}

module.exports = Application