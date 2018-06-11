/**
 * Created by yuan on 2018/6/6.
 */
import { createStore } from 'redux'
import rootReducer from './reducers'
import { applyMiddleWare } from '../redux'

//let store = createStore(rootReducer);
//let dispatch = store.dispatch
/*store.dispatch = function (action) {
 console.log('旧状态',store.getState())
 dispatch(action)
 console.log('新状态',store.getState())
 }*/

let logger1 = function({dispatch,getState}) {
    return function (next) {//dispatch  = store.dispatch
        return function (action) {//store.dispatch
            console.log('旧状态1',getState())
            next(action)//dispatch(action)
            console.log('新状态1',getState())
            let number = getState().counter.number
            if(number == 10){
                dispatch({type:'INCREMENT',payload:-10})
            }
        }}}

let logger2 = function({dispatch,getState}) {
    return function (next) {//dispatch  = store.dispatch
        return function (action) {//store.dispatch
            console.log('旧状态2',getState())
            next(action)//dispatch(action)
            console.log('新状态2',getState())}}}

let thunk =  ({dispatch,getState})=>next=>action=>{
    if(typeof action == 'function'){
        action(dispatch,getState)
    }else{
        console.log('action',action)//Object {type: "INCREMENT", payload: 1}
        next(action)
    }
}

let promise = ({dispatch,getState})=>next=>action=>{
    if(action.then && typeof action.then == 'function'){
        action.then(dispatch)
    }else if(action.payload && action.payload.then && typeof action.payload.then == 'function'){
        action.payload.then(payload=>dispatch({...action,payload}),payload=>dispatch({...action,payload}))
    }else{
        next(action)
    }
}

//let store = applyMiddleWare(promise,thunk,logger1,logger2)(createStore)(rootReducer)
let store = createStore(rootReducer,{counter:12},applyMiddleWare(promise,thunk,logger1,logger2))

window.store = store;
export default store;

