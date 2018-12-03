/**
 * Created by yuan on 2018/11/30.
 */


function bigNumber(a, b) {
    a = a.split('')
    b = b.split('')
    c = 0, res = ''
    while (a.length || b.length || c) {
        c += ~~a.pop() + ~~b.pop()
        res = c % 10 + res
        c = c > 9
    }
    return res.replace(/^0+/g,'')
}


console.log(bigNumber('1000000000010000037', '200000000000000000083'));