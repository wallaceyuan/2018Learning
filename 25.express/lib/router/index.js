const url = require('url')
const Route = require('./route')
const Layer = require('./layer')
const slice = Array.prototype.slice
const methods = require('methods')

function Router(){
    function router(req,res,next) {
        router.handle(req,res,next)
    }
    Object.setPrototypeOf(router,proto)
    router.stack = []
    return router
}

let proto = Object.create(null)

proto.route = function (path) {//创建一层一个“门”
    let route = new Route(path)
    let layer = new Layer(path, route.dispatch.bind(route))
    layer.route = route
    this.stack.push(layer)
    return route
}

proto.use = function (path,handler) {
    if(typeof handler != 'function'){
        handler = path
        path = '/'
    }
    let layer = new Layer(path, handler)
    layer.route = undefined
    this.stack.push(layer)
}

methods.forEach(function (method) {
    proto[method] = function (path) {
        let route = this.route(path)//往router里面添加一层
        route[method].apply(route,slice.call(arguments,1))
        return this
    }
})

proto.handle = function (req, res, out) {
    let idx = 0,self = this,slashAdder = false,removed = ''
    let { pathname } = url.parse(req.url,true)
    function next(err) {
        if(removed.length>0){
            req.url = removed + req.url
            removed = ''
        }
        if(idx >= self.stack.length){
            return out(err)
        }
        let layer = self.stack[idx++]

        if(layer.match(pathname)){
            if(!layer.route){
                removed = layer.path // /user
                req.url = req.url.slice(removed.length) // /2
                if (err) {
                    layer.handle_error(err, req, res, next);
                } else {
                    layer.handle_request(req, res, next);
                }
            }else{
                if (layer.route && layer.route.handle_method(req.method)){
                    layer.handle_request(req, res, next)
                }else{
                    next(err)
                }
            }
        } else {
            next(err)
        }
    }
    next();
}

module.exports = Router