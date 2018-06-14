/**
 * Created by yuan on 2018/6/13.
 */
import 'babel-polyfill';
import { delay } from 'redux-saga'
import { takeEvery, all,call, put , take } from 'redux-saga/effects';
import * as types from './store/action-types';
import { push } from 'react-router-redux'

let Api = {
    login(username,password){
        return new Promise(function (resolve,reject) {
            resolve(username+password)
            console.log('login resolve');
        })
    }
}

function* login(username,password) {
    try {
        let token = yield call(Api.login,username,password)
        yield put({type:types.LOGIN_SUCCESS,token:token})
        yield put(push('/logout'))
        return token;
    }catch(error) {
        yield put({type:types.LOGIN_ERROR,error});
    }

}

function* loginFlow() {
    while(true){
        var {username,password} = yield take(types.LOGIN_REQUEST)//监听
        let token = yield login(username,password)
        if(token){
            yield take(types.LOGOUT_REQUEST)//监听
            yield put(push('/login'))
        }
    }
}

export function* rootSaga({dispatch,getState}) {
    yield all([
        loginFlow(),
    ])
}