let code = `function square(n) {return n * n;}`
let babel = require('babel-core');
let types = require('babel-types');

const updateParamNameVisitor = {
    Identifier(path){
        if(path.node.name == this.paramName){
            path.node.name = 'x'
        }
    }
}

let visitor = {
    FunctionDeclaration(path){
        const param = path.node.params[0]
        const paramName = param.name;
        param.name = "x";
        path.traverse(updateParamNameVisitor, { paramName });
    }
}

let arrayPlugin = { visitor }
let result = babel.transform(code, {
    plugins: [
        arrayPlugin
    ]
})
console.log(result.code)