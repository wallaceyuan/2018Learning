import { createStore, applyMiddleware ,compose } from 'redux'
import rootReducer from './reducers'
import createSagaMilldeware from 'redux-saga'
import { rootSaga } from  '../sagas'

let sagaMiddleware = createSagaMilldeware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga,store)

window.store = store

export default store;
