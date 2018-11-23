/**
 * Created by yuan on 2018/11/20.
 */

let diff = require('./diff')
let patch = require('./patch')
let {createElement} = require('./element');

let ul1 = createElement('ul', {class: 'list'}, 'A', [
    createElement('li', {class: 'list1'}, 'B', ['1']),
    createElement('li', {class: 'list2'}, 'C', ['2']),
    createElement('li', {class: 'list3'}, 'D', ['3'])
]);
let root = ul1.render();
document.body.appendChild(root);

let ul2 = createElement('ul', {class: 'list2'}, 'A', [
    createElement('li', {class: 'list4'}, 'E', ['6']),
    createElement('li', {class: 'list1'}, 'B', ['1']),
    createElement('li', {class: 'list2'}, 'C', ['2']),
    createElement('li', {class: 'list5'}, 'F', ['5']),
]);
let patches = diff(ul1, ul2,root)
console.log(patches)

patch(root, patches)