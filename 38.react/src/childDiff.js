let {createElement} = require('./element');
let utils = require('./utils')

function childPatch(root, patches = []) {

    let nodeMap = {};

    (Array.from(root.childNodes)).forEach(node => {
        nodeMap[node.getAttribute('key')] = node
    });

    patches.forEach(path=> {
        let oldNode
        switch (path.type) {
            case utils.INSERT:
                let newNode = nodeMap[path.node.key] || path.node.render()
                oldNode = root.childNodes[path.index]
                if (oldNode) {
                    root.insertBefore(newNode, oldNode)
                } else {
                    root.appendChild(newNode)
                }
                break;
            case utils.REMOVE:
                oldNode = root.childNodes[path.index]
                if (oldNode) {
                    root.removeChild(oldNode)
                }
                break;
            default:
                throw new Error('没有这种补丁类型')
        }
    })
}

function childDiff(oldChildren, newChildren) {
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
            insert(newIndex,newChildren[newIndex]);
            newIndex++;
        } else if (oldKey != newKey) {
            let nextOldKey = (oldChildren[oldIndex + 1] || {}).key;
            if (nextOldKey == newKey) {
                remove(newIndex);
                oldChildren.splice(oldIndex, 1);
            } else {
                insert(newIndex, newChildren[newIndex]);
                newIndex++;
            }
        } else {
            oldIndex++;
            newIndex++;
        }
    }

    while (oldIndex++ < oldChildren.length) {
        remove(newIndex)
    }

    function insert(index,element) {
        patches.push({type: utils.INSERT, index, node: createElement('li', element.attrs, element.key, element.children)});
    }

    function remove(index) {
        patches.push({type: utils.REMOVE, index})
    }

    return patches
}

module.exports = {
    childDiff,
    childPatch
}