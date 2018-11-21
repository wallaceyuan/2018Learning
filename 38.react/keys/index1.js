//let utils = require('./utils')

const REMOVE = "REMOVE"
const INSERT = "INSERT"

class Element {
    constructor(tagName, key, children) {
        this.tagName = tagName;
        this.key = key;
        this.children = children || [];
    }
    render() {
        let element = document.createElement(this.tagName);
        element.innerHTML = this.children
        element.setAttribute('key', this.key)
        return element;
    }
}

function el(tagName, key, children) {
    return new Element(tagName, key, children)
}

let oldTree = [
    el('li', 'A', 'A'),
    el('li', 'B', 'B'),
    el('li', 'C', 'C'),
    el('li', 'D', 'D'),
]

let ul = document.createElement('ul')

oldTree.forEach(item=>ul.appendChild(item.render()))

document.body.appendChild(ul)

let newChildren = [
    el('li', 'B', 'B'),
    el('li', 'C', 'C'),
    el('li', 'D', 'D'),
    el('li', 'A', 'A'),
]

let patches = diff(oldTree, newChildren)
console.log(patches)//[{type:'REMOVE',index:0},{type:'INSERT',index:3,key:'E'}]
patch(ul,patches)

function patch(root,patches=[]) {
    patches.forEach(path=>{
        let oldNode
        switch (path.type){
            case INSERT:
                let newNode = path.node.render()
                oldNode = root.childNodes[path.index]
                if(oldNode){
                    root.insertBefore(newNode,oldNode)
                }else{
                    root.appendChild(newNode)
                }
                break;
            case REMOVE:
                oldNode = root.childNodes[path.index]
                if(oldNode){
                    root.removeChild(oldNode)
                }
                break;
            default:
                throw new Error('没有这种补丁类型')
        }
    })
}

function diff(oldChildren, newChildren) {
    let patches = []
    let newKeys = newChildren.map(item=>item.key)
    let oldIndex = 0;
    while (oldIndex < oldChildren.length) {
        let oldKey = oldChildren[oldIndex].key;//A
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
            insert(newIndex, newKey);
            newIndex++;
        } else {
            oldIndex++;
            newIndex++;
        }
    }

    while (oldIndex++ < oldChildren.length){
        remove(newIndex)
    }

    function insert(index,key) {
        patches.push({ type: INSERT, index, node: el('li', key, key) });
    }

    function remove(index) {
        patches.push({type: REMOVE, index})
    }
    
    return patches
}