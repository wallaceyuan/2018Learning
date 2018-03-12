function Layer(path,handler) {
    this.path = path
    this.handler = handler
}

Layer.prototype.match = function (path){
    if (this.path == path){
        return true;
    }
    if(!this.route){
        return path.startsWith(this.path + '/');
    }
    return false
}

//每一层的layer 的 handle_requset是 route.dispath.bind(route)方法
Layer.prototype.handle_request = function (req,res,next) {
    this.handler(req,res,next)
}

Layer.prototype.handle_error = function (err,req,res,next) {
    if(this.handler.length != 4){
        return next(err)
    }
    this.handler(err,req,res,next)
}

module.exports = Layer