let code = `const result = 1000 * 60`;
let babel = require('babel-core');
let types = require('babel-types');

let visitor = {
    BinaryExpression(path){
        let node = path.node
        if(!isNaN(node.left.value) && !isNaN(node.right.value)){
            let result = eval(node.left.value + node.operator + node.right.value)
            result = types.numericLiteral(result)
            path.replaceWith(result)
        }
    }
}

let arrayPlugin = { visitor }
let result = babel.transform(code, {
    plugins: [
        arrayPlugin
    ]
})
console.log(result.code)