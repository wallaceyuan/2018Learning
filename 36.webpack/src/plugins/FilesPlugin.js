class FilesPlugins{
    constructor(options){
        this.options = options
    }
    apply(compiler){
        compiler.hooks.emit.tapAsync('EmitPlugin', (compilation,callback)=> {
            console.log(compilation.assets);
            let content = '## 文件内容列表 \n\n';
            for (let attr in compilation.assets) {
                content += `- ${attr} \n`;
            }
            compilation.assets[this.options.filename || 'filelist.md'] = {
                source() {
                    return content;
                },
                size() {
                    return Buffer.byteLength(content)
                }
            }
            callback()
        })
    }
}

module.exports = FilesPlugins