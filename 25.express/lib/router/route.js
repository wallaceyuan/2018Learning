const Layer = require('./layer')

function Route(path){
    this.path = path
    this.stach = []
    this.methods = {}
}

let router = []
Route.prototype.get = function(handler){
    let layer = new Layer('/', handler)
    this.methods['get'] = true
    this.stach.push(layer)
}

Route.prototype.dispatch = function (req, res, out) {
    let { pathname } = url.parse(req.url, true)
    for (let i = 0; i < this._router.length; i++) {
        let { path, method, handler } = this._router[i]
        if (pathname == path && method == req.method.toLowerCase()) {
            return handler(req, res)
        }
    }
    this._router[0].handler(req, res)
}