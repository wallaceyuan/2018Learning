/**
 * Created by yuanyuan on 2018/12/25.
 */
function remove_dup(str) {
    let arr = str.split(' ')
    let b = []
    for(var i = 0,l = arr.length;i<l;i++){
        var v = arr.shift()
        if(arr.indexOf(v) == -1){
            b.push(v)
        }
    }
    return b.join(' ')
}



//[bb,aa,cc,bb,aa]
remove_dup('aa bb cc aa bb')

console.log(remove_dup('eqsewi myo ady ady eqsewi uxfkc'));
