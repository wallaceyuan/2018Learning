import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { compose } from '../../compose'
import thunk from 'redux-thunk'

let logger1 = function({dispatch,getState}) {
    return function (next) {//dispatch  = store.dispatch
        return function (action) {//store.dispatch
            console.log('旧状态1',getState())
            next(action)//dispatch(action)
            console.log('新状态1',getState())
        }
    }
}

let logger2 = ({dispatch,getState}) => next => action =>{
    console.log('旧状态2',getState())
    next(action)//dispatch(action)
    console.log('新状态2',getState())
}

/*
let applyMiddleware = function (middleware) {//middleware 是应用中间件 createStore是用来创建仓库 reducer是用来创建仓库
    return function (createStore) {
        return function (reducer) {
            let store = createStore(reducer)
            let dispatch
            let middlewareAPI = {
                getState:store.getState,
                dispatch:action =>dispatch(action)
            }
            middleware = middleware(middlewareAPI) //return function(next)
            dispatch = middleware(store.dispatch)
            return {...store,dispatch}
        }
    }
}
*/

let store = createStore(
    rootReducer,
    applyMiddleware(thunk,logger1,logger2)
)

//let store = applyMiddleware(logger1)(createStore)(rootReducer)
window.store = store;
export default store;

