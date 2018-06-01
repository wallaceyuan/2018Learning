/**
 * Created by yuanyuan on 2018/4/22.
 */
var start = new Date()
var db = connect('school')
var stus = []
for(var i=0;i<1000;i++){
    stus.push({name:'zfpx'+i,age:i})
}

db.students.insert(stus)
print('cost '+ (Date.now() - start) / 1000 + ' s')