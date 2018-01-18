/**
 * Created by yuanyuan on 2018/1/17.
 */

/*1.如何把一个unicode(十六进制)码转成utf8(二进制）编码
传进去一个unicode */
function transfer() {
    
}

//unicode 都是十六进制,所有的汉字都是三个字节
let r = transfer(0x4E07)
console.log(r);
/*
let b = parseInt(0x4E07.toString(2))
console.log(b);*/
