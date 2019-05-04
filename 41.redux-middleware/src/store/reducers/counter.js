import * as types from '../action-types'

export default function(state = {number: 0,data:[]}, action) {
    switch(action.type){
        case types.INCREMENT:
            return {number: state.number + action.payload};
        case types.DECREMENT:
            return {number:state.number - action.payload};
        case types.GETAJAX:{
            return {data:state.data};
        }
        default:
            return state;
    }
}