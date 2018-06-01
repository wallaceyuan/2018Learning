import * as types from '../action-types'

export default function(state = {number: 1 }, action) {
    switch(action.type){
        case types.INCREMENT:
            return {number: state.number + action.payload};
        case types.DECREMENT:
            return {number:state.number - action.payload};
        default:
            return state;
    }
}