/**
 * Created by yuan on 2018/11/30.
 */
var arr = [1, 2, 3, 4, 5, 6, 6, 6, 6, 63, 2, 1]
var aa = Array.from(new Set(arr))
console.log(aa);

function unique(arrList) {
    var box = []
    return arrList.filter(item=> {
        if (box.indexOf(item) == -1) {
            box.push(item)
            return true
        } else {
            return false
        }
    })
}

console.log(unique(arr));