/**
 * Created by yuanyuan on 2018/12/2.
 */
function print(value) {
    console.log(math.format(value))
}
var math = require('mathjs')
math.config({
    number: 'BigNumber', // Default type of number:
    // 'number' (default), 'BigNumber', or 'Fraction'
    precision: 20 // Number of significant digits for BigNumbers
})
console.log(Number(0.1).toString(2));
//0.0001100110011001100110011001100110011001100110011001101


console.log(Number(0.2).toString(2));
//0.001100110011001100110011001100110011001100110011001101

console.log(0.1 + 0.2);

print(math.eval('0.1 + 0.2'));
print(math.add(math.bignumber(0.1), math.bignumber(0.2))) // number, 0.30000000000000004
print(math.bignumber(1.2e+500)) // BigNumber, Infinity      WRONG

let goodNumber = 20
let goodPrice = 10
let promotionNubmer = 10

console.log(math.eval(`${goodNumber}*${goodPrice} - ${promotionNubmer}`).toFixed(2));


//https://www.css88.com/archives/7340
function accAdd(arg1, arg2) {
    var r1, r2, m, c
    try {
        r1 = arg1.toString().split('.')[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split('.')[1].length
    } catch (e) {
        r2 = 0
    }
    c = Math.abs(r1 - r2)
    m = Math.pow(10, Math.max(r1, r2))
    if (c > 0) {
        var cm = Math.pow(10, c);
        if (r1 > r2) {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", "")) * cm;
        } else {
            arg1 = Number(arg1.toString().replace(".", "")) * cm;
            arg2 = Number(arg2.toString().replace(".", ""));
        }
    } else {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", ""));
    }
    return (arg1 + arg2) / m;
}

Number.prototype.add = function (arg) {
    return accAdd(arg, this);
};

console.log(0.1.add(0.2));


function sumStrings(a,b){
    var res='', c=0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || c){
        c += ~~a.pop() + ~~b.pop();
        res = c % 10 + res;
        c = c>9;
    }
    return res.replace(/^0+/,'');
}

console.log(sumStrings('13', '217'));

var test = 222.115
function toFixed(num, s) {
    var times = Math.pow(10, s)
    var des = num * times + 0.5
    des = parseInt(des, 10) / times
    return des + ''
}

console.log(test.toFixed(2));
console.log(toFixed(test, 2));
