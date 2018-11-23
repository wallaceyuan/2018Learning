/**
 * Created by yuan on 2018/11/23.
 */

const flattenDeep = (arr) => Array.isArray(arr)
    ? arr.reduce( (a, b) => [...a, ...flattenDeep(b)] , [])
    : [arr]

console.log(flattenDeep([1, [[2], [3, [4]], 5]])); //[ 1, 2, 3, 4, 5 ]

/*var array1 = [1, [2], 3]

array1.flatMap((v) => v + 1,2)*/

//[1, [2], 3].flatMap((v) => v + 1)
/*const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));*/
// expected output: 15





