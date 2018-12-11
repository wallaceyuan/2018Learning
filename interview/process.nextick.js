/**
 * Created by yuanyuan on 2018/12/8.
 */
setImmediate(function(){
    console.log('4');
});
setImmediate(function(){
    console.log('5');
});
process.nextTick(function(){
    console.log('1');
    process.nextTick(function(){
        console.log('2');
        process.nextTick(function(){
            console.log('3');
        });
    });
});

console.log('next');


// next 1 2 3 4 5