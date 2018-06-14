import { createStore, applyMiddleware ,compose } from 'redux'
import rootReducer from './reducers'
import createSagaMilldeware from 'redux-saga'
import { rootSaga } from  '../sagas'


import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createHashHistory';
const history = createHistory();
const middlewareRouter = routerMiddleware(history);


let sagaMiddleware = createSagaMilldeware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware,middlewareRouter)));

sagaMiddleware.run(rootSaga,store)

window.store = store

export default store;
