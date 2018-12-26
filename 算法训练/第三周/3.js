/**
 * Created by yuanyuan on 2018/12/25.
 */
function sort(list) {
    return list.sort()
    /*return list.sort(function (a,b) {
        a = a.split('')
        b = b.split('')
        var flag
        while (a.length && b.length ) {
            let r = a.shift().charCodeAt() - b.shift().charCodeAt()
            if(r > 0){
                flag = r
                break;
            }else if(r<0){
                flag = 0;
                break;
            }else if(r = 0){
                flag = 0
            }
        }
        return flag
    })*/
}

console.log(sort(['xyz', 'okr', 'oop', 'ofo', 'abc'])); // ['abc', 'ofo', 'okr', 'oop', 'xyz']



/*var sentence = 'abcdefghijklmnopqrstuvwxyz.ABCDEFGHIJKLMNOPQRSTUVWXYZ。';

[...sentence].map((s,i)=>{
    console.log(s,s.charCodeAt());
})*/

//console.log('The character code ' + sentence.charCodeAt(index) + ' is equal to ' + sentence.charAt(index));
// expected output: "The character code 113 is equal to q"
