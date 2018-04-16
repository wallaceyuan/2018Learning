import { createStore } from 'redux'

//reducer
function counter(state=0,action){
    switch(action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

//use subscribe() to update the UI in response to state changes.
store.subscribe(() =>
    console.log(store.getState())
)


store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })