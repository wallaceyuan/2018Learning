/**
 * Created by yuan on 2018/10/7.
 */
let obj = {}

Object.defineProperties(obj,'then',{
    get(){
        throw new Error()
    }
})

obj.then