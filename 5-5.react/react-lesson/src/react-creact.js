/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();


let React = {
    createElement(type,props,...children){
        return{type,props,children}
    }
}
let el = <h1 name="yy">hello<span>world</span></h1>

render(el,document.getElementById('root'))

function render(vnode,container) {
    if(typeof vnode === 'string') return container.appendChild(document.createTextNode(vnode))
    let {type,props,children} = vnode
    let tag = document.createElement(type)
    for(let key in props){
        tag.setAttribute(key,props[key])
    }
    children.forEach(child=>{
        render(child,tag)
    })
    container.append(tag)
}
//React.createElement(<h1 name="yy">hello<span>world</span></h1>, document.getElementById('root'));
