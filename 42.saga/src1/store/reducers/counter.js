/**
 * Created by yuan on 2018/6/13.
 */
import * as types from '../action-types'

export default function(state = {number: 0}, action) {
    switch(action.type){
        case types.INCREMENT:
            return {number: state.number + 1};
        case types.DECREMENT:
            return {number:state.number - 1};
        default:
            return state;
    }
}