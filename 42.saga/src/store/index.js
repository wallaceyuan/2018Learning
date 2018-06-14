import { createStore, applyMiddleware ,compose } from 'redux'
import rootReducer from './reducers'
import createSagaMilldeware from 'redux-saga'
import { rootSaga } from  '../sagas'


import createHistory from 'history/createHashHistory';
import { routerMiddleware } from 'react-router-redux'
const history = createHistory();
const router = routerMiddleware(history);



let sagaMiddleware = createSagaMilldeware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware,router)));

sagaMiddleware.run(rootSaga,store)

window.store = store

export default store;
