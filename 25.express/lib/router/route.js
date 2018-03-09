const Layer = require('./layer')

function Route(path){
    this.path = path
    this.stcak = []
    this.methods = {}
}

Route.prototype.get = function(handler){
    let layer = new Layer('/', handler)
    this.methods['get'] = true
    this.stcak.push(layer)
}

Route.prototype.handle_method = function (method) {
    method = method.toLowerCase()
    return this.methods[method]
}

Route.prototype.dispatch = function (req,res,out) {
    let idx = 0, self = this
    function next() {
        if (idx > tjos.stcak.length){
            return out()
        }
        let layer = self.stcak[idx++]
        if (layer.method == req.method.toLowerCase){
            layer.handle_requset(req,res,next)
        }else{
            next()
        }
    }
    next()
}

module.exports = Route