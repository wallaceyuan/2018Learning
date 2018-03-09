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

Router.prototype.handler = function (req, res, out) {
    let idx = 0,self = this
    let { pathname } = url.parse(req.url,true)
    function next() {
        if(idx >= this.stack.length){
            return out()
        }
        let layer = this.stack[idx++]
        if (layer.match(pathname) && layer.route && layer.route.handle_method(req.method.toLowerCase())){
            layer.handle_requset(req,res,next)
        }else{
            next()
        }
    }
}

module.exports = Router