/**
 * Created by yuan on 2018/2/25.
 */
let { spawn } = require('child_process')
let path = require('path')
let p1 = spawn('node',['test1.js', 'zfpx'],{
    cwd:path.join(__dirname,'test1'),
    stdio:['pipe','pipe','pipe']
})

let p2 = spawn('node',['test2.js', 'zfpx'],{
    cwd:path.join(__dirname,'test2'),
    stdio:['pipe','pipe','pipe']
})


p1.stdout.on('data',function (data) {
    console.log(data.toString())
    p2.stdin.write(data)
})

p1.on('close',function () {
    console.log('子进程1关闭');
})

p1.on('exit',function () {
    console.log('子进程1退出');
})

p1.on('error',function (err) {
    console.log('子进程1开启失败' + err);
})