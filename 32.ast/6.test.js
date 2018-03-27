let babel = require('babel-core');
let types = require('babel-types');
let code = `codes.map(code=>{return code.toUpperCase()})`;

let visitor = {
    ArrowFunctionExpression(path) {
        let params = path.node.params
        let blockStatement = path.node.body
        let func = types.functionExpression(null, params, blockStatement, false, false)
        path.replaceWith(func)
    }
}

let arrayPlugin = { visitor }
let result = babel.transform(code, {
    plugins: [
        arrayPlugin
    ]
})
console.log(result.code)