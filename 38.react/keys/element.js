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
    el('li', 'a', 'A'),
    el('li', 'b', 'B'),
    el('li', 'c', 'C'),
    el('li', 'd', 'D'),
]

let ul = document.createElement('ul')

oldTree.forEach(item=>ul.appendChild(item.render()))

document.body.appendChild(ul)

let newChildren = [
    el('li', 'b', 'B'),
    el('li', 'c', 'C'),
    el('li', 'd', 'D'),
    el('li', 'e', 'E'),
]


let patches = diff(oldTree, newChildren)
console.log(patches)//[{type:'REMOVE',index:0},{type:'INSERT',index:3,key:'E'}]


function diff(oldChildren, newChildren) {
    let patches = []
    let newKeys = newChildren.map(item=>item.key)
    let oldIndex = 0
    while (oldIndex < oldChildren.length) {
        let oldKey = oldChildren[oldIndex].key
        if (!newKeys.includes(oldKey)) {
            remove(oldIndex)
            oldChildren.splice(oldIndex, 1)
        } else {
            oldIndex++
        }
    }
    function remove(index) {
        patches.push({type: REMOVE, index})
    }

    oldIndex = 0
    newIndex = 0
    while (newIndex < newChildren.length) {
        let newKey = (newChildren[newIndex] || {}).key
        let oldKey = (oldChildren[oldIndex] || {}).key
        if (!oldKey) {
            insert(newIndex,newKey)
        }
    }

    function insert(index) {
        patches.push({type: REMOVE, index})
    }

    return patches
}