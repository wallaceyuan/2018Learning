/**
 * Created by yuan on 2018/11/23.
 */
/*console.log('script start');

setTimeout(function() {
    console.log('setTimeout');
}, 0);

new Promise((resolve) => {
    console.log('Promise')
    resolve()
}).then(function() {
    console.log('promise1');
}).then(function() {
    console.log('promise2');
});

console.log('script end');*/




setTimeout(()=>{
    console.log('timer1')

    Promise.resolve().then(function() {
        console.log('promise1')
    })
}, 0)

setTimeout(()=>{
    console.log('timer2')

    Promise.resolve().then(function() {
        console.log('promise2')
    })
}, 0)