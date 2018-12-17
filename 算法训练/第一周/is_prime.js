/**
 * Created by yuanyuan on 2018/12/17.
 */
console.log(is_prime(1)); // false
console.log(is_prime(100)); // false
console.log(is_prime(13)); // true
console.log(is_prime(179426549)); // true
console.log(is_prime(22801763489)); // true

function is_prime(n) {
    /*let s = Number(Math.floor(n/2)),prime = n ==1 ?false:true
    while(s>=2 && prime){
        if(n % s == 0) prime = false;
        s--
    }
    return prime*/
}
/*function is_prime(n) {
    if(n>1 && n<=3){return true}
    else {
        for (var i = 2; i < Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}*/

