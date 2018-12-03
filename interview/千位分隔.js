/**
 * Created by yuan on 2018/11/30.
 */
var str = "100000000000",
    reg = /(?=(\B\d{3})+$)/g;
console.log(str.replace(reg,','));


console.log((123456789).toLocaleString());




var number = 123456.789;

// request a currency format
console.log(number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// → 123.456,79 €

// the Japanese yen doesn't use a minor unit
console.log(number.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
// → ￥123,457

// limit to three significant digits
console.log(number.toLocaleString('en-IN', { maximumSignificantDigits: 3 }));
// → 1,23,000
