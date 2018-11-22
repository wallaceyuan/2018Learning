/**
 * Created by yuanyuan on 2018/11/22.
 */
let a = {
    value: 1
}
function getValue(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value)
}
//getValue.call(a, 'yck', '24')//'yck','24',1
getValue.apply(a, ['yck', '24'])//'yck','24',1