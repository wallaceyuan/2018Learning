/**
 * Created by yuanyuan on 2018/1/17.
 */
let buf1 = Buffer.alloc(6,2)
console.log(buf1)

let buf2 = Buffer.allocUnsafe(60)
console.log(buf2);

/*let buf3 = Buffer.from('珠峰')
console.log(buf3);*/


console.log(parseInt(256).toString(16));//0x0100

const buf = Buffer.allocUnsafe(4);
buf.writeInt16BE(0x0102, 0);
console.log(buf);//<Buffer 01 02 00 00>


console.log(0x0100)//256

//每8个位（bit）组成一个字节（Byte）
//writeInt16BE  读16bit就是读两个字节 <Buffer 00 00>

console.log('///----------///----------///----------')
let buf3 = new Buffer(4);
buf3.writeInt16BE(2**8,0);//256 0x0100
console.log(buf3);//<Buffer 01 00 00 00>
console.log(buf3.readInt16BE(0));
buf3.writeInt16LE(2**8,2);
console.log(buf3);//<Buffer 01 00 00 01>
console.log(buf3.readInt16LE(2));