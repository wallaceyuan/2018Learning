/**
 * Created by yuanyuan on 2019/1/25.
 */
function eightQueen(arr, cnt) {
    //parameters
    this.arr = arr;
    this.cnt = cnt;
    this.outputArr = []

    //methods
    this.search = function(r){
        //if r == 8, then a solution is found
        if(r==8){
            document.write('<br>'+this.cnt+'<br>');
            this.output(this.arr);
            this.cnt++;
            console.log(111,this.outputArr)
            return this.outputArr
        }
        for(var i=0;i<8;i++){
            this.arr[r] = i;
            for(var j=0;j<r;j++){
                //check if this position is valid
                if(this.arr[r] == this.arr[j] || r-j == Math.abs(this.arr[r]-this.arr[j])){
                    break;
                }
            }
            // if flag == 1, then the row numbered r is valid
            //if(flag)    this.search(r+1); //search the next row
        }
    }
    //output the valid solutions in format
    this.output = function() {
        console.log(12121)
        for(var i=0; i<8;i++){
            for(var j=0; j<8;j++){
                pos = (j==arr[i]) ? '1 ' : '0 ';
                console.log('pospospospospos',pos)
                if(pos == '1'){
                    this.outputArr.push([i,j])
                }
                //document.write(pos);
            }
            //document.write('<br>');
        }
    }
}

//Initial array
var arr = [-1,-1,-1,-1,-1,-1,-1,-1]
//create a object
var eq = new eightQueen(arr,1);
//use object's method to find all solutions and print them
console.log(eq.search(0));