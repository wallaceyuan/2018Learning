/**
 * Created by yuan on 2018/11/23.
 */
function jsonp(src,jsonpCallback,success) {
    var script = document.createElement('script')
    script.src = src
    script.async = true
    script.type = "text/javascript";
    window[jsonpCallback] = function (data) {
        success && success(data)
    }
    document.body.appendChild(script)
}

jsonp(
    'https://www.baidu.com',
    "callback",
    function(value) {
        console.log(value);
    }
)