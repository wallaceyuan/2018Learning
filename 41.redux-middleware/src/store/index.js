import { createStore } from 'redux'
import rootReducer from './reducers'

let store = createStore(rootReducer);
let dispatch = store.dispatch

/*store.dispatch = function (action) {
    console.log('旧状态',store.getState())
    dispatch(action)
    console.log('新状态',store.getState())
}*/

let logger = function r(dispatch,getState) {
    return function (next) {
        return function (action) {
            console.log('旧状态',getState())
            next(action)
            console.log('新状态',getState())
        }
    }
}

window.store = store;
export default store;

