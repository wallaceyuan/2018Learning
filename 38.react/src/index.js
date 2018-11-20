/**
 * Created by yuan on 2018/11/20.
 */

let createElement = require('./element');
let diff = require('./diff')
let patch = require('./patch')

let ul1 = createElement('ul', {class: 'list'}, [
    createElement('li', {class: 'list1'}, ['1']),
    createElement('li', {class: 'list2'}, ['2']),
    createElement('li', {class: 'list3'}, ['3'])
]);
let root = ul1.render();
document.body.appendChild(root);

let ul2 = createElement('ul', {class: 'list'}, [
    createElement('li', {class: 'list1'}, ['1']),
    createElement('li', {class: 'list2'}, ['2']),
    createElement('li', {class: 'list3'}, ['3']),
    createElement('li', {class: 'list3'}, ['4'])
]);
let patches = diff(ul1,ul2)
console.log(patches)

patch(root,patches)