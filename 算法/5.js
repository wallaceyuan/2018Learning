const originObj = {
    a: {
        b: {
            c: [1, 5, 11, 23, 422]
        }
    },
    d: function() {
        console.log("hello world");
    }
};

/*
function clone(source) {
    if(!source || typeof source !== 'object'){
        throw new Error('error arguments')
    }
    var targetObj = source.constructor === Array ? []:{}

    for(var keys in source){
        if(source.hasOwnProperty(keys)){
            if(source[keys] && typeof source[keys] == 'object') {
                targetObj[keys] = source[keys].constructor === Array ? [] : {}
                targetObj[keys] = clone(source[keys])
            }else{
                targetObj[keys] = source[keys]
            }
        }
    }
    return targetObj
}
*/

function clone(originObj) {
    if (typeof originObj !== "object") {
        return originObj;
    }
    const obj = originObj.constructor();
    for (let key in originObj) {
        obj[key] = clone(originObj[key]);
    }
    return obj;
}

console.log(clone(originObj));