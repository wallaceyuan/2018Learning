const {
    SyncHook,
} = require('tapable');

const hook1 = new SyncHook(["arg1", "arg2", "arg3"]);

//绑定事件到webapck事件流
hook1.tap('hook1', (arg1, arg2, arg3) => console.log(arg1, arg2, arg3))

//执行绑定的事件
hook1.call(1, 2, 3)