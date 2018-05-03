import * as types from "../action-types";

export default{
    add_todo(text){
        return { type: types.ADD_TODO, text: text}
    },
    del_todo(idx){
        return {type:types.DEL_TODO, index: idx}
    }
}