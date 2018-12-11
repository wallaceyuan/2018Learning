/**
 * Created by yuan on 2018/11/30.
 */


function bigNumber(a, b) {
    a = a.split('')
    b = b.split('')
    let c = 0, result = ''
    while (a.length || b.length || c) {
        c += ~~a.pop() + ~~b.pop()
        result += c % 10
        c = c > 9
    }
    return result.replace(/^0+/g,'')
}


console.log(bigNumber('1000000000010000037', '200000000000000000083'));