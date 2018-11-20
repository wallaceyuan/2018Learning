/**
 * Created by yuan on 2018/11/20.
 */
let utils = require('./utils')
let keyIndex = 0;

function diff(oldTree, newTree) {
    keyIndex = 0;
    let patches = {};
    let index = 0;
    walk(oldTree, newTree, index, patches);
    return patches;
}

/**
 *
 * @param {*} oldNode 老节点
 * @param {*} newNode 新节点
 * @param {*} index 老节点在旧树深度遍历中的索引
 * @param {*} patches 补丁对象
 */

function walk(oldNode, newNode, index, patches) {
    console.log('====', oldNode, newNode, index, patches)
    let currentPatch = [];
    if (newNode == null) {
        currentPatch.push({type: utils.REMOVE, index})
    } else if (oldNode == null) {
        currentPatch.push({type: utils.ADD, index})
    } else if (utils.isString(oldNode) && utils.isString(newNode)) {
        if (oldNode != newNode) {
            currentPatch.push({type: utils.TEXT, content: newNode});
        }
    } else if (oldNode.tagName == newNode.tagName) {
        let attrsPatch = diffAttrs(oldNode, newNode);
        if (Object.keys(attrsPatch).length > 0) {
            currentPatch.push({type: utils.ATTRS, node: attrsPatch});
        }
        diffChildren(oldNode.children, newNode.children, index, patches);
    } else {
        currentPatch.push({type: utils.REPLACE, node: newNode});
    }
    if (currentPatch.length > 0) {
        patches[index] = currentPatch;
    }
}

function diffChildren(oldChildren, newChildren, index, patches) {
    oldChildren.forEach((old, idx)=> {
        walk(old, newChildren[idx], ++keyIndex, patches)
    })
}

function diffAttrs(oldNode, newNode) {
    let attrsPatch = {};
    for (let attr in oldNode.attrs) {
        if (oldNode.attrs[attr] != newNode.attrs[attr]) {
            attrsPatch[attr] = newNode.attrs[attr];
        }
    }
    for (let attr in newNode.attrs) {
        if (!(oldNode.attrs.hasOwnProperty(attr))) {
            attrsPatch[attr] = newNode.attrs[attr];
        }
    }
    return attrsPatch;
}
module.exports = diff;
