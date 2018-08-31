/**
 * Created by yuan on 2018/8/28.
 */
module.exports = function (source) {
    let script = (
    `let style = document.createElement("style");
     style.innerText  = ${JSON.stringify(source)}
     document.head.appendChild(style);    
    `);
    return script
}