/**
 * Created by yuanyuan on 2018/11/27.
 */
function solution(number) {
    return number<=0?0:Array.from({length: number},(_,index)=>index).reduce((prev,next)=>(next % 3 === 0 || next % 5 === 0)? prev += next:prev,0)
}

console.log(solution(10));