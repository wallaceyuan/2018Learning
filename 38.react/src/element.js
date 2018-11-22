let utils = require('./utils')

class Element {
    constructor(tagName, attrs, key, children) {
        this.tagName = tagName;
        this.attrs = attrs;
        this.key = key;
        this.children = children || [];
    }

    render() {
        let element = document.createElement(this.tagName);
        for (let attr in this.attrs) {
            utils.setAttribute(element, attr, this.attrs[attr]);
            element.setAttribute('key', this.key)
        }
        let children = this.children || [];
        //先序深度遍历
        children.forEach(child => {
            let childElement = (child instanceof Element) ? child.render() : document.createTextNode(child);
            element.appendChild(childElement);
        });
        return element;
    }
}

module.exports = function (tagName, attrs, key, children) {
    return new Element(tagName, attrs, key, children);
}