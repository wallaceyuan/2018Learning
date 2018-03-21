import name from './base';
import React from 'react';
import ReactDOM from 'react-dom'
import ajax from 'ajax'
let result = ajax('/ajax')

let fetch  = require('fetch')
console.log(fetch);

ReactDOM.render(<h1>{name}</h1>, document.getElementById('root'));
console.log(name);
if (__development__ == 'development') {
    let s = 'ssssssssssssssssssssssss';
    console.log(s);
    console.log(s);
    console.log(s);
    console.log(s);
}

console.log(name,'hello')
