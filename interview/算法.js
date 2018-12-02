/**
 * Created by yuanyuan on 2018/12/2.
 */
//数组去重
var s1 = [1, 13, 24, 11, 11, 14, 1, 2]
console.log([...new Set(s1)])//[ 1, 13, 24, 11, 14, 2 ]

function unique(arr) {
    return arr.reduce((pre, next)=> {
        if (pre.indexOf(next) == -1) pre.push(next)
        return pre
    }, [])
}

console.log(unique(s1));

//统计一个字符串出现最多的字母
var s2 = 'afjghdfraaaasdenas'
function findMaxDuplicateChar(str) {
    var charObj = {}
    str.split('').map(item=>charObj.hasOwnProperty(item) ? charObj[item] = charObj[item] + 1 : charObj[item] = 1)
    var judge = 0, judgeKey
    for (key in charObj) {
        if (charObj[key] > judge) {
            judge = charObj[key]
            judgeKey = key
        }
    }
    return judgeKey
}

console.log(findMaxDuplicateChar(s2));


//冒泡算法
let arrNumber = [10, 22, 2, 22, 3, 44]
var count = 0
function BubbleSort(arr) {
    let temp;
    for(var i= 0,l=arr.length;i<l;i++){
        for(var j=arr.length-1; j>i; j--){
            if(arr[j] < arr[j-1]){
                temp =  arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }
        }
    }
    return arr
}

console.log(BubbleSort(arrNumber));

//选择排序
function select_sort(array) {
    var lenth = array.length
    for(var i=0;i<lenth-1;i++){
        var minIndex = i;
        for(var j=i+1;j<lenth;j++){
            if(array[j]<array[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex != i){
            var temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    return array
}
console.log(select_sort(arrNumber));

//快速排序法
function quickSort(arr) {
    if(arr.length < 1){
        return arr
    }
    let leftArr = []
    let rightArr = []
    let q = arr[0]
    for(let i = 1;i<arr.length;i++){
        if(arr[i]>q){
            rightArr.push(arr[i])
        }else{
            leftArr.push(arr[i])
        }
    }
    return [].concat(quickSort(leftArr),[q],quickSort(rightArr))
}
console.log(quickSort(arrNumber));

//斐波那契
function getFibonacci(n) {
    var fibarr = [];
    var i = 0
    while(i<n){
        if(i <=1){
            fibarr.push(i)
        }else{
            fibarr.push(fibarr[i-1]+fibarr[i-2])
        }
        i++
    }
    return fibarr
}
console.log(getFibonacci(10));