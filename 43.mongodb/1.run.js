/**
 * Created by yuanyuan on 2018/4/22.
 */
var modify = {
    findAndModify:'students',
    query:{name:'zfpx'},
    update:{$set:{age:100}},
    fields:{name:'1'},
    sort:true,
    new:true //返回修改后的值
}

var db = connect('school')
var result = db.runCommand(modify);
printjson(result);