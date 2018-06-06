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
            console.log('新状态1',getState())}}}
let logger2 = function({dispatch,getState}) {
    return function (next) {//dispatch  = store.dispatch
        return function (action) {//store.dispatch
            console.log('旧状态2',getState())
            next(action)//dispatch(action)
            console.log('新状态2',getState())}}}


let store = applyMiddleWare(logger1,logger2)(createStore)(rootReducer)

window.store = store;
export default store;

