/**
 * Created by yuan on 2018/12/14.
 */
const arr = [
    { id: 1, name: "i1" },
    { id: 2, name: "i2", parentId: 1 },
    { id: 4, name: "i4", parentId: 3 },
    { id: 3, name: "i3", parentId: 2 },
    { id: 8, name: "i8", parentId: 7 }
];

/*function buildTree(arr) {
    /!**
     * 此处写代码逻辑
     *!/
    var result = [], temp = {}, i = 0, j = 0, len = arr.length
    for(; i < len; i++){
        temp[arr[i]['id']] = arr[i]
    }
    for(; j < len; j++){
        var currentElement = arr[j]
        var tempCurrentElementParent = temp[currentElement['parentId']]
        if (tempCurrentElementParent) {
            if (!tempCurrentElementParent['children']) {
                tempCurrentElementParent['children'] = []
            }
            tempCurrentElementParent['children'].push(currentElement)
        } else {
            result.push(currentElement);
        }
    }
    return result;
}*/

function buildTree(arr, node = arr.find(x => !x.parentId)) {
    return {
        id : node.id,
        name : node.name,
        children : arr
            .filter(x => x.parentId === node.id)
            .map(x => buildTree(arr, x))
    }
}

console.log(buildTree(arr));