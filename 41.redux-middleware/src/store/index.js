import { createStore } from 'redux'
import rootReducer from './reducers'

/*
let store = createStore(rootReducer);
let dispatch = store.dispatch
store.dispatch = function (action) {
    console.log('旧状态',store.getState())
    dispatch(action)
    console.log('新状态',store.getState())
}
*/

let middlewareAPI = {
    getState:store.getState,
    dispatch:action =>dispatch(action)
}

let logger = function({dispatch,getState}) {
    return function (next) {//dispatch  = store.dispatch
        return function (action) {//store.dispatch
            console.log('旧状态1',getState())
            next(action)//dispatch(action)
            console.log('新状态1',getState())
        }
    }
}

let logger2 = ({dispatch,getState}) => next => action =>{
    console.log('旧状态1',getState())
    next(action)//dispatch(action)
    console.log('新状态1',getState())
}


/*let applyMiddleware = function (middleware) {//middleware 是应用中间件 createStore是用来创建仓库 reducer是用来创建仓库
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
//let store = applyMiddleware(logger)(createStore)(rootReducer)


let store = createStore(
    rootReducer,
    //initialState
    applyMiddleWare(logger)
)*/


window.store = store;
export default store;

