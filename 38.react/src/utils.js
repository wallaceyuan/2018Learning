/**
 * Created by yuan on 2018/11/20.
 */

let utils = {
    REPLACE : 'REPLACE',//节点整个被替换
    ATTRS : 'ATTRS',//属性改变
    REMOVE : 'REMOVE',//节点被移除
    TEXT : 'TEXT',//文本内容改变
    ADD:'ADD',
    setAttribute(element, attr, value){
        switch (attr) {
            case 'style':
                element.style.cssText = value
                break;
            case 'value':
                let tagName = element.tagName.toLowerCase()
                if (tagName == 'input' || tagName == 'textarea') {
                    element.value = value
                } else {
                    element.setAttribute(attr, value)
                }
                break;
            default:
                element.setAttribute(attr, value)
                break;
        }
    },
    type(obj){
        return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '');
    },
    isString(str){
        return utils.type(str) == 'String';
    }
}

module.exports = utils