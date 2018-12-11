/**
 * Created by yuanyuan on 2018/12/11.
 */
function accum(str) {
    return Array.from(str, (v, i) => {
        return v.toUpperCase() + Array(i).fill(v.toLowerCase()).join('')
    }).join('-')
}


console.log(accum("abcd"));    // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));    // "C-Ww-Aaa-Tttt"
console.log(accum("")); // ""
