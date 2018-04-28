import * as types from '../action-types'

var count = 1

export default function (state = { lists: [{text:'移动端计划',idx:0}] }, action) {
    switch (action.type) {
        case types.ADD_TODO:
            state.lists.push({
                text: action.text,
                idx:count++
            })
            return { lists: state.lists };
        case types.DEL_TODO:
            state.lists.filter((list)=>{
                return list.idx != types.idx
            })
            return { lists: state.lists};
        default:
            return state;
    }
}