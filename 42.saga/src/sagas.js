/**
 * Created by yuan on 2018/6/13.
 */
import 'babel-polyfill';
import { delay } from 'redux-saga'
import { takeEvery, all, put } from 'redux-saga/effects';
import * as types from './store/action-types';


let Api = {
    login(username,password){
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                resolve(username+password)
            },100)
        })
    }
}


function* login(username,password) {
    try {
        let token = yield call(Api.login,username,password)
        yield put({type:types.LOGIN_SUCCESS,token:token})
        return token
    }
    catch(error) {
        yield put({type:types.LOGIN_ERROR})
    }

}

function* loginFlow() {
    while(true){
        var {username,password} = yield take(types.LOGIN_REQUEST)//监听
        let token = yield login(username,password)
        if(token){

        }
    }
}

export function* rootSaga({dispatch,getState}) {
    yield all([
        loginFlow(),
    ])
}