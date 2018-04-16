import counter from './counter';
// let combineReducers = reducers => (state = {}, action) => Object.keys(reducers).reduce((currentState, key) => {
//     currentState[key] = reducers[key](state[key], action);
//     return currentState;
// }, {});
//合并成应该返回一个新的函数
export default counter;
/**
 * {
 * counter:{number:0},
 * counter2:{number:0}
 * }
 */
// function combineReducers(reducers) {
//     //返回合并后的reducer,这个函数将被传入createStore
//     return function (state = {}, action) {
//         let newState = {};
//         for (let attr in reducers) {
//             let reducer = reducers[attr];
//             newState[attr] = reducer(state[attr], action);
//         }
//         return newState;
//     }
// }
