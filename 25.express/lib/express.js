let router = [{
    path:"*",
    method:"*",
    handler(req,res){
        res.end(`Cannot ${req.method} ${req.url}`)
    }
}]
const http = require('http')
function createApplication(){
    return {
        get(path,handler){
            router.push({
                path,
                handler,
                method:'get'
            })
        },
        listen(port,handler){
            http.createServer(function(){
                handler()
            }).listen(port)
        }
    }
}

module.exports = createApplication