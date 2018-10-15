//babel核心库，用来实现核心的转换引擎
let babel = require('babel-core');
//可以实现类型判断，生成AST节点
let types = require('babel-types');
let code = `let sum = (a,b)=>a+b`; // let sum = function (a,b){return a+b}

let visitor = {
    ArrowFunctionExpression(path){
        console.log(path.type)
        let params = path.node.params
        console.log(path.node.params)

        let blockStatement = types.blockStatement([
            types.returnStatement(path.node.body)
        ])

        let func = types.functionExpression(null, params, blockStatement, false, false)

        path.replaceWith(func)

    }
}

let result = babel.transform(code,{
    plugins:[
        { visitor }
    ]
})
console.log('result',result.code)