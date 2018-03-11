const url = require('url')
const Route = require('./route')
const Layer = require('./layer')
const slice = Array.prototype.slice
const methods = require('methods')

function Router(){
    this.stack = []
}

Router.prototype.route = function (path) {//创建一层一个“门”
    let route = new Route(path)
    let layer = new Layer(path, route.dispatch.bind(route))
    layer.route = route
    this.stack.push(layer)
    return route
}

methods.forEach(function (method) {
    Router.prototype[method] = function (path) {
        let route = this.route(path)//往router里面添加一层
        route[method].apply(route,slice.call(arguments,1))
        return this
    }
})

Router.prototype.handle = function (req, res, out) {
    let idx = 0,self = this
    let { pathname } = url.parse(req.url,true)

    function next() {
        if(idx >= self.stack.length){
            return out()
        }
        let layer = self.stack[idx++]
        if (layer.match(pathname) && layer.route && layer.route.handle_method(req.method.toLowerCase())){
            layer.handle_requset(req,res,next)
        }else{
            next()
        }
    }
    next();
}

module.exports = Router