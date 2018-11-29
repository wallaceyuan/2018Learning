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




/*setTimeout(()=>{
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
}, 0)*/



setTimeout(function(){
    console.log(4)
},0);
new Promise(function(resolve){
    console.log(1)
    for( var i=0 ; i<10000 ; i++ ){
        i===9999 && resolve()
    }
    console.log(2)
}).then(function(){
    console.log(5)
});
console.log(3);


//1 2 3 4 5