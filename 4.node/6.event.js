/**
 * Created by yuanyuan on 2018/1/14.
 */


let EventEmitter = require('./event')
//let EventEmitter = require('events')
let util = require('util')

//这是一个类
function Bell() {
    EventEmitter.call(this) //继承私有属性
}

/*object.setPrototypeOf(ctor.prototype,superCtor.prototype)
ctor.prototype.__proto__ = superCtor.prototype*/

util.inherits(Bell,EventEmitter)

let bell = new Bell()

function studentInClassroom(thing,roomNumber) {
    console.log(`学生${thing}进${roomNumber}教室`)
}
function teacherInClassroom(thing,roomNumber) {
    console.log(`老师${thing}进${roomNumber}教室`)
}
function masterInClassroom(thing,roomNumber) {
    console.log(`耿老师${thing}进${roomNumber}教室`)
}
bell.addEventListener('响',studentInClassroom)
bell.on('响',teacherInClassroom)
bell.once('响',masterInClassroom)
bell.emit('响','301','书')