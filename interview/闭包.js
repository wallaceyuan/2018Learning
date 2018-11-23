/**
 * Created by yuan on 2018/11/23.
 */

/*for ( var i=1; i<=5; i++) {
    setTimeout( function timer() {
        console.log( i );// 6 6 6 6 6
    }, i*1000 );
}*/

/*
for (var i = 1; i <= 5; i++) {
    (function(j) {
        setTimeout(function timer() {
            console.log(j);//1 2 3 4 5
        }, j * 1000);
    })(i);
}
*/


for ( var i=1; i<=5; i++) {
    setTimeout( function timer(j) {
        console.log( j );
    }, i*1000, i);
}

//第三种就是使用 let 定义 i 了
for ( let i=1; i<=5; i++) {
    setTimeout( function timer() {
        console.log( i );
    }, i*1000 );
}