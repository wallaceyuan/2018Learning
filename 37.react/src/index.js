import React from 'react';
//import {render} from 'react-dom';
/*import App from './App';
 import * as serviceWorker from './serviceWorker';*/
//ReactDOM.render(<label className="test" htmlFor='hello'>hello<span>world</span></label>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();

/*let React = {
 createElement(type, props, ...children){
 return {type, props, children}
 }
 }
 let el = <h1 name="yy">hello<span>world</span></h1>

 render(el, document.getElementById('root'))

 function render(vnode, container) {
 if (typeof vnode === 'string') return container.appendChild(document.createTextNode(vnode))
 let {type, props, children} = vnode
 let tag = document.createElement(type)
 for (let key in props) {
 tag.setAttribute(key, props[key])
 }
 children.forEach(child=> {
 render(child, tag)
 })
 container.append(tag)
 }*/
//React.createElement(<h1 name="yy">hello<span>world</span></h1>, document.getElementById('root'));

let render = (vNode,container)=>{
    let {type,props} = vNode;
    let elementNode = document.createElement(type); // 创建第一个元素
    for(let attr in props){ // 循环所有属性
        if(attr === 'children'){ // 如果是children表示有嵌套关系
            if(typeof props[attr] == 'object'){ // 看是否是只有一个文本节点
                props[attr].forEach(item=>{ // 多个的话循环判断 如果是对象再次调用render方法
                    if(typeof item === 'object'){
                        render(item,elementNode)
                    }else{ //是文本节点 直接创建即可
                        elementNode.appendChild(document.createTextNode(item));
                    }
                })
            }else{ // 只有一个文本节点直接创建即可
                elementNode.appendChild(document.createTextNode(props[attr]));
            }
        }else{
            elementNode = setAttribute(elementNode,attr,props[attr])
        }
    }
    container.appendChild(elementNode)
};

function setAttribute(dom,name,value) {
    if(name === 'className') name = 'class'

    if(/on\w+/.test(name)){
        name = name.toLowerCase();
        dom[ name ] = value || '';
    }else if ( name === 'style' ) {
        if ( !value || typeof value === 'string' ) {
            dom.style.cssText = value || '';
        } else if ( value && typeof value === 'object' ) {
            for ( let name in value ) {
                dom.style[ name ] = typeof value[ name ] === 'number' ? value[ name ] + 'px' : value[ name ];
            }
        }
    }else{
        if ( name in dom ) {
            dom[ name ] = value || '';
        }
        if ( value ) {
            dom.setAttribute( name, value );
        } else {
            dom.removeAttribute( name );
        }
    }
    return dom
}

render(
    React.createElement(
        'label',
        {htmlFor:'hello',className:'test'},
        'hello',
        React.createElement(
            'span',
            null,
            'world'
        )
    ),
    document.getElementById('root')
);

