/**
 * Created by yuan on 2018/11/23.
 */

self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("my-cache").then(function (cacahe) {
            //return cache.addAll(["./index.html", "./index.js"]);
        })
    )
})

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(function(response) {
            if (response) {
                return response;
            }
            console.log("fetch source");
        })
    );
})