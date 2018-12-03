/**
 * Created by yuan on 2018/11/30.
 */



let str = '2018-10-07T11:48:47 Asia/zh-cn'


//[2018,10,07,11,48,47]



var reg =   /(\d{1,})+/g

console.log(str.match(reg));