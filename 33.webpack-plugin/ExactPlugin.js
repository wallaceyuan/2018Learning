let code = `import {flatten,join} from 'lodash';`
let babel = require('babel-core');
let types = require('babel-types');

let visitor = {
  ImportDeclaration(path){
    let node = path.node
    let specifiers = node.specifiers
    if(!types.isImportDefaultSpecifier(specifiers[0])){
      let newImports = specifiers.map(specifier =>(
        types.ImportDeclaration([types.ImportDefaultSpecifier(specifier.local)],
        types.StringLiteral(`${node.source.value}/${specifier.local.name}`))
      ))
      path.replaceWithMultiple(newImports);
    }
  }
}

let result = babel.transform(code, {
    plugins: [
      { visitor }
    ]
})
console.log(result.code)