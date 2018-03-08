const url = require('url')
const Route = require('./route')

function Router(){
    this.stack = []
}

Router.prototype.route = function (path) {//创建一层一个“门”
    let route = new Route(path)
    let layer = new layer(path, route.dispath.bind(route))
    layer.route = route
    this.stack.push(layer)
    return route
}

Router.prototype.get = function (path, handler) {
    let route = this.route(path)
    route.get(handler)
}

Router.prototype.handler = function (req, res, done) {

}

module.exports = Router