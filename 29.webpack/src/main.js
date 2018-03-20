import color from './color'

require('./index.css')
require('./less.less')
require('./sass.scss')
require('bootstrap');
let src = require('./images/avatar.png')
let img = new Image()
img.src = src
document.body.appendChild(img)

console.log(color)
let getColor = ()=>{
    return color
}


console.log(getColor())