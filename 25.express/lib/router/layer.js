function Layer(path,handler) {
    this.path = path
    this.handler = handler
}

Layer.prototype.match = function (path){
    return this.path == path
}

//每一层的layer 的 handle_requset是 route.dispath.bind(route)方法
Layer.prototype.handle_requset = function (req,res,next) {
    this.handler(req,res,next)
}

module.exports = Layer