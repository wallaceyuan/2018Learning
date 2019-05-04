import * as types from "../action-types";
import 'es6-promise';
import fetch from 'isomorphic-fetch'
import axios from 'axios';

export default{
    increment(payload){
        return {type: types.INCREMENT, payload: payload}
    },
    thunkIncrement(payload){
        return function (dispatch, getState) {
            setTimeout(function () {
                dispatch({type: types.INCREMENT, payload: payload})
            }, 1000)
        }
    },
    promiseIncrement(payload){
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve({type: types.INCREMENT, payload: payload})
            }, 1000)
        })
    },
    payloadIncrement(payload){
        return {
            type: types.INCREMENT,
            payload: new Promise((resolve, reject)=> {
                setTimeout(function () {
                    if (Math.random() > 0.5) {
                        resolve(100)
                    } else {
                        reject(-100)
                    }
                }, 1000)
            })
        }
    },
    decrement(payload){
        return {type: types.DECREMENT, payload: payload}
    },
    getAjax(payload){
        console.log('getAjaxgetAjax')
        return {
            type: types.GETAJAX,
            payload:new Promise((resolve, reject)=> {
                axios.get('https://easy-mock.com/mock/5c6cb037241b092e864e14c8/v1/get_canary_process_detail')
                    .then(function (response) {
                        resolve(response)
                    })
                    .catch(function (error) {
                        reject(error);
                    });
            })
        }
    }
}