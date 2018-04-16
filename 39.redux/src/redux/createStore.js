export default function(reducer, preloadedState) {
    let state = preloadedState;
    let listeners = [];
    function getState(params) {
        return JSON.parse(JSON.stringify(state)) //深拷贝
    }
    function dispatch(action) {
        state = reducer(state, action)
        listeners.forEach(listener => listener());
    }
    //派发了一个动作获取初始值，其实在redux内部是派发一个INIT: '@@redux/INIT'动作
    dispatch({ type: '@@redux/INIT' });
    function subscribe(listener) {
        listeners.push(listener);
        //返回一个取消订阅函数
        return function () {
            listeners = listeners.filter(item => item != listener)
        }
    }
    return {
        getState, dispatch, subscribe
    }
}