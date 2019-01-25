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
                flag = false
                remain = remain.sort()
                const t = remain.indexOf(10)
                const f = remain.indexOf(5)
                if (t > -1 && f > -1) {
                    remain.splice(t, 1)
                    remain.splice(f, 1)
                    flag = true
                } else {
                    flag = true
                    for (var i = 0; i < 3; i++) {
                       if(remain[i]!=5){
                           flag = false
                       }
                    }
                    if(flag){
                        remain.splice(0, 3)
                    }
                }
            }
        }
    })
    return flag
}

//console.log(change([5, 5, 10, 10])); // true
//console.log(change([5, 5, 10, 10, 20])); // false
console.log(change([5, 5, 5, 10, 20])); // true


