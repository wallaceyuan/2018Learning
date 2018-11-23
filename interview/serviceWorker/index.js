/**
 * Created by yuan on 2018/11/23.
 */
if(navigator.serviceWorker){
    navigator.serviceWorker
        .register("sw.js")
        .then(function (registration) {
            console.log('service worker 注册成功')
        })
        .catch(function (err) {
            console.log('service worker 注册失败')
        })
}