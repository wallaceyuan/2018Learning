/**
 * Created by yuan on 2018/6/6.
 */
import compose from './compose'
export default  function (...middlewares) {//middleware 是应用中间件 createStore是用来创建仓库 reducer是用来创建仓库
    return function (createStore) {
        return function (reducer) {
            let store = createStore(reducer)
            let dispatch
            let middlewareAPI = {
                getState:store.getState,
                dispatch:action =>dispatch(action)
            }
            middlewares = middlewares.map(middleware=>middleware(middlewareAPI)) //return function(next)
            dispatch = compose(...middlewares)(store.dispatch)
            return {...store,dispatch}
        }
    }
}