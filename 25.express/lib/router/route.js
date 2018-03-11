const Layer = require('./layer')

function Route(path){
    this.path = path
    this.stack = []
    this.methods = {}
}

Route.prototype.get = function(handler){
    let layer = new Layer('/', handler)
    layer.method = 'get'
    this.methods['get'] = true
    this.stack.push(layer)
}

Route.prototype.handle_method = function (method) {
    method = method.toLowerCase()
    return this.methods[method]
}

Route.prototype.dispatch = function (req,res,out) {
    let idx = 0, self = this
    function next() {
        if (idx >= self.stack.length){
            return out()
        }
        let layer = self.stack[idx++]
        if (layer.method == req.method.toLowerCase()){
            layer.handle_requset(req,res,next)
        }else{
            next()
        }
    }
    next()
}

module.exports = Route