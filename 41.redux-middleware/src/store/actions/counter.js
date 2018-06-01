import * as types from "../action-types";

export default{
    increment(payload){
        return {type:types.INCREMENT,payload:payload}
    },
    decrement(payload){
        return {type:types.DECREMENT,payload:payload}
    }
}