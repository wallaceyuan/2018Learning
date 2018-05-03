import * as types from '../action-types'

export default function (state = { lists: [{text:'移动端计划',completed:false}]}, action) {
    switch (action.type) {
        case types.ADD_TODO:
            return {...state,lists:[...state.lists,{text:action.text}]}
        case types.DEL_TODO:
            state.lists.filter((list)=>{
                return list.idx != types.idx
            })
            return { lists: state.lists};
        default:
            return state;
    }
}