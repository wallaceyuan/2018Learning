/**
 * Created by yuan on 2018/6/13.
 */
import * as types from '../action-types'

export default function(state = {token,error}, action) {
    switch(action.type){
        case types.LOGIN_SUCCESS:
            return {...state,token:action.token};
        case types.DECREMENT:
            return {...state,token:action.token};
        default:
            return state;
    }
}