/**
 * Created by yuanyuan on 2019/1/25.
 */
function solve() {
    this.arr = [-1,-1,-1,-1,-1,-1,-1,-1];
    this.cnt = 1;
    this.notend = true
    this.outputArr = []

    this.search = function(r){
        if(r==8){
            this.output(this.arr);
            this.cnt++;
            return null
        }
        for(var i=0;i<8;i++){
            this.arr[r] = i;
            flag = 1
            for(var j=0;j<r;j++){
                if(this.arr[r] == this.arr[j] || r-j == Math.abs(this.arr[r]-this.arr[j])){
                    flag = 0;
                    break;
                }
            }
            if(flag && this.notend)    this.search(r+1); //search the next row
        }
    }
    this.output = function() {
        for(var i=0; i<8;i++){
            for(var j=0; j<8;j++){
                pos = (j==arr[i]) ? '1 ' : '0 ';
                if(pos == 1){
                    this.outputArr.push([i,j])
                }
                this.notend = false
            }
        }
    }

    this.search(0)
    return this.outputArr
}

console.log(solve());