/**
 * Created by yuan on 2018/6/13.
 */
import 'babel-polyfill';
import { delay } from 'redux-saga'
import { takeEvery, all, put } from 'redux-saga/effects';
import * as types from './store/action-types';

export function* increment() {
    yield delay(1000)
    yield put({type:types.INCREMENT})
}

export function* watchIncrement() {
    yield takeEvery(types.INCREMENT_ASYNC,increment)
}

export function* log(dispatch,getState,action) {
    console.log('状态',getState())
    console.log(action)
}

export function* watchAndLog(dispatch,getState) {
    yield takeEvery('*',log,dispatch,getState)
}

export function* rootSaga({dispatch,getState}) {
    yield all([
        watchIncrement(),
        watchAndLog(dispatch,getState)
    ])
}