function renerTitle(title) {
    console.log('title')
    let element = document.querySelector('#title')
    element.innerHTML = title.text
    element.style.color = title.color
}

function renderContent(content) {
    let element = document.querySelector('#content')
    element.innerHTML = content.text
    element.style.color = content.color
}

const UPDATE_TITLE_COLOR = 'UPDATE_TITLE_COLOR';
const UPDATE_TITLE_TEXT = 'UPDATE_TITLE_TEXT';
const UPDATE_CONTENT_COLOR = 'UPDATE_CONTENT_COLOR';
const UPDATE_CONTENT_TEXT = 'UPDATE_CONTENT_TEXT';

function createStore(reducer, preloadedState) {
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

let initState = {
    title: { color: 'red', text: '标题' },
    content: { color: 'green', text: '内容' }
}

let reducer = function (state = initState, action) {
    switch (action.type) {
        case UPDATE_TITLE_COLOR:
            //state.title.color = action.color
            return { ...state, title: { ...state.title, color: action.color } }//1。结构state，2.覆盖title 3.结构title 4.覆盖color属性
        case UPDATE_TITLE_TEXT:
            return { ...state, title: { ...state.title, text: action.text } }
        case UPDATE_CONTENT_COLOR:
            return { ...state, content: { ...state.content, color: action.color } }
        case UPDATE_CONTENT_TEXT:
            return { ...state, content: { ...state.content, color: action.text } }
        default:
            return state
    }
}

let store = createStore(reducer, {
    title: { color: 'red', text: '标题' },
    content: { color: 'green', text: '内容' }
})
function render() {
    renerTitle(store.getState().title)
    renderContent(store.getState().content)
}
render()
let unsubscribe = store.subscribe(render)
setTimeout(() => {
    store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'orange' })
    unsubscribe()
    store.dispatch({ type: 'UPDATE_CONTENT_COLOR', color: 'blue' })
    // render(store.getState())
}, 1000);