//{"a_b":1}


function convertJSON(obj) {
    let newObj = {}
    Object.keys(obj).forEach(key=>{
        let value = obj[key]
        let newKey = key.replace(/_(\w)/g, function(all, letter) { return letter.toUpperCase()})
        if(typeof value == 'object'){
            newObj[newKey] = convertJSON(value)
        }else{
            newObj[newKey] = value
        }
    })
    return newObj
}

console.log(convertJSON({"a_b": 1, "c_d": 2, "e_f": {"d_s": 2}}));