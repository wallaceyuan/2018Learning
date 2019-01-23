/**
 * Created by yuanyuan on 2019/1/23.
 */

function change(bills) {
    let remain = [], m = 5, flag = true
    bills.map(b => {
        const r = b
        const p = r - m
        remain.push(r)
        if (p != 0) {
            if (p == 5) {
                const idx = remain.indexOf(p)
                idx > -1 ? remain.splice(remain.indexOf(p), 1) : flag = false
            } else {
                console.log('1515151')
                flag = false
                if(remain.indexOf('10') > -1 && remain.indexOf('10')){

                }
                /*let count = 0
                for (var i = 0, l = remain.length; i < l; i++) {
                    count = count + remain[i]
                    console.log(count)
                    if (count == 15) {
                        remain.splice(0,i)
                        flag = true
                        break;
                    }
                }*/
            }
        }
    })
    return flag
}

//console.log(change([5, 5, 10, 10])); // true
//console.log(change([5, 5, 10, 10, 20])); // false
console.log(change([5, 5, 5, 10, 20])); // true


