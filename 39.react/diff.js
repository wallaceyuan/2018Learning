/**
 * 在dom diff中如何识别和处理key
 */
const REMOVE = 'REMOVE';
const INSERT = 'INSERT';
class Element {
    constructor(tagName, key, children) {
        this.tagName = tagName;
        this.key = key;
        this.children = children;
    }
    render() {
        let element = document.createElement(this.tagName);
        element.innerHTML = this.children;
        element.setAttribute('key', this.key);
        return element;
    }
}
function el(tagName, key, children) {
    return new Element(tagName, key, children);
}
let oldChildren = [
    el('li', 'A', 'A'),
    el('li', 'B', 'B'),
    el('li', 'C', 'C'),
    el('li', 'D', 'D'),
    el('li', 'Z', 'Z')
]
let ul = document.createElement('ul');
oldChildren.forEach(item => ul.appendChild(item.render()));
document.body.appendChild(ul);
let newChildren = [
    el('li', 'B', 'B'),
    el('li', 'C', 'C'),
    el('li', 'D', 'D'),
    el('li', 'E', 'E'),
]
let patches = diff(oldChildren, newChildren);
console.log(patches);//[{type:REMOVE,index:0},{type:INSERT,index:3,{key:'E'}}]
function diff(oldChildren, newChildren) {
    let patches = [];
    let newKeys = newChildren.map(item => item.key);
    //第一步，把老数组在新数组中没有的元素移除掉
    let oldIndex = 0;
    while (oldIndex < oldChildren.length) {
        let oldKey = oldChildren[oldIndex].key;//A
        //console.log(oldIndex,oldKey,oldChildren)
        if (!newKeys.includes(oldKey)) {
            remove(oldIndex);
            oldChildren.splice(oldIndex, 1);
        } else {
            oldIndex++;
        }
    }

    oldIndex = 0;
    newIndex = 0;
    while (newIndex < newChildren.length) {
        let newKey = (newChildren[newIndex] || {}).key;
        let oldKey = (oldChildren[oldIndex] || {}).key;
        if (!oldKey) {
            insert(newIndex, newKey);
            newIndex++;
        } else if (oldKey != newKey) {
            console.log(oldKey,newKey);
            insert(newIndex, newKey);
            newIndex++;
        } else {
            oldIndex++;
            newIndex++;
        }
    }

    function insert(index, key) {
        patches.push({ type: INSERT, index, node: el('li', key, key) });
    }
    function remove(index) {
        patches.push({ type: REMOVE, index });
    }
    return patches;
}