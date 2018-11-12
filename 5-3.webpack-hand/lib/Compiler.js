const path = require('path');
const fs = require('fs');
const babylon = require('babylon');
const t = require('babel-types');
const generate = require('babel-generator').default;
const traverse = require('babel-traverse').default;
const ejs = require('ejs');
const {SyncHook} = require('tapable');

class Compiler{
    constructor(options) {
        this.options = options
        this.hooks = {
            entryOption: new SyncHook(),
            afterPlugins: new SyncHook(),
            run: new SyncHook(),
            compile: new SyncHook(),
            afterCompile: new SyncHook(),
            emit: new SyncHook(["compiler"]),
            afterEmit: new SyncHook(),
            done: new SyncHook()
        }
        let plugins = options.plugins;
        if (plugins && plugins.length > 0) {
            plugins.forEach(plugin => plugin.apply(this));
        }
        this.hooks.entryOption.call();
        this.hooks.afterPlugins.call();
        this.hooks.run.call();
        this.hooks.compile.call();
        this.hooks.afterCompile.call();
        this.hooks.emit.call();
        this.hooks.afterEmit.call();
        this.hooks.done.call();
    }
    run(){
        //确定入口：根据配置中的 entry 找出所有的入口文件；
        let {entry} = this.options
        this.root = process.cwd()
        let that = this
        this.entryId = null; //记录入口文件的ID
        this.modules = []
        this.buildModule(path.resolve(this.root, entry), true)
        this.emitFile();
    }
    emitFile(){
        let mainTemplate = fs.readFileSync(path.join(__dirname,'main.ejs'),'utf8')
        let {modules,entryId} = this
        let main = ejs.compile(mainTemplate)({entryId,modules})
        let {
            output: {
                path: dist,
                filename
            }
        } = this.options;
        fs.writeFileSync(path.join(dist, filename), main);
    }
    buildModule(modulePath, isEntry) {
        let source = this.getSource(modulePath); //获取源代码
        let moduleId = './' + path.relative(this.root, modulePath)
        if (isEntry) {
            this.entryId = moduleId
        }
        let {dependencies,sourcecode} = this.parse(source, path.dirname(moduleId));//源代码，父路径
        this.modules[moduleId] = sourcecode;
        //递归解析依赖的模块
        dependencies.forEach(dependency => this.buildModule(path.join(this.root, dependency)))
    }
    getSource(modulePath) {
        let that = this
        let source = fs.readFileSync(modulePath, 'utf8')
        let {module: {rules}} = this.options;
        for (let i = 0; i < rules.length; i++) {
            let rule = rules[i];
            if (rule.test.test(modulePath)) {
                let loaders = rule.use;
                let loaderIndex = loaders.length - 1;

                function iterateLoaders() {
                    let loaderName = loaders[loaderIndex--].loader;
                    let loader = require(path.resolve(that.root, 'node_modules', loaderName));
                    source = loader(source);
                    if (loaderIndex >= 0) {
                        iterateLoaders();
                    }
                }
                iterateLoaders();
                break;
            }
        }
        return source;
    }
    parse(source, parentPath) {
        let that = this;
        const ast = babylon.parse(source);
        let dependencies = [];
        traverse(ast,{
            CallExpression(p){
                if(p.node.callee.name == 'require'){
                    let node = p.node
                    node.callee.name = '__webpack_require__'
                    let modName = node.arguments[0].value// ./a
                    modName += (modName.lastIndexOf('.') > 0 ? '' : '.js')
                    let moduleId = './' + path.join(parentPath, modName);
                    dependencies.push(moduleId);
                    node.arguments = [t.stringLiteral(moduleId)]
                }
            }
        })
        let sourcecode = generate(ast).code;
        return {sourcecode,dependencies};
    }
}

module.exports = Compiler