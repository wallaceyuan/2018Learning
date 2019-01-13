class Node {
    constructor(v){
        this.next = null
        this.value = v
    }
}


// 构造一个链表
const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
a.next=b
b.next=c
c.next=d

/*
d.next = c
c.next = b
b.next = a
*/

/*Node {
    next: Node { next: Node { next: [Object], value: 'c' }, value: 'b' },
    value: 'a' }

 Node {
 next: Node { next: Node { next: [Object], value: 'b' }, value: 'c' },
 value: 'd' }

    */

// 执行reverse函数
const x = reverse(a)
console.log(x);
// x: d->c->b->a->null

// 其他情况
console.log(reverse(null)); // null
console.log(reverse(new Node('x'))); // x -> null

function check(node) {
    return node && node.__proto__.constructor == Node
}
function reverse(node,param=null) {
    if( !check(node) ) return null
    let n = new Node(node.value)
    n.next = param
    let next = node.next
    if(next && check(next)) {
        n = reverse(next, n)
    }
    return n
}
