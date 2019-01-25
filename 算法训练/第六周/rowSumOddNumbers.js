/**
 * Created by yuanyuan on 2019/1/24.
 */
function rowSumOddNumbers(n) {
    let f = 2 * ( (n) * (n - 1) / 2) + 1
    let c = 0
    for (var i = 0; i < n; i++) {
        c += f
        f += 2
    }
    return c
}


console.log(rowSumOddNumbers(1)); // 1
console.log(rowSumOddNumbers(2)); // 3+5=8
console.log(rowSumOddNumbers(3)); // 7+9+11=27
console.log(rowSumOddNumbers(42)); // 74088

/*

 1
 3     5
 7     9    11
 13    15    17    19
 21    23    25    27    29
 ...*/
