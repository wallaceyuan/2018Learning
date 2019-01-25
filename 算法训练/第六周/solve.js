/**
 * Created by yuanyuan on 2019/1/25.
 */
let gEightQueen = Array(8).fill(0);
let gCount = 0;
console.log(gEightQueen)


function print() {
    let outer
    let inner
    for(outer = 0;outer<8;outer++){
        for(inner=0;inner<gEightQueen[outer];inner++){
            console.log('* ')
        }
        console.log("# ")
        for(inner = gEightQueen[outer+1];inner<8;inner++){
            console.log('* ')
        }
        console.log("n ")
    }
    console.log("=====================================n");
}

function check_pos_valid(loop,value) {
    let index;
    let data;
    for(index = 0; index < loop; index ++){
        data = gEightQueen[index];

        if(value == data)
            return 0;

        if((index + data) == (loop + value))
            return 0;

        if((index - data) == (loop - value))
            return 0;
    }

    return 1;
}
function eight_queen(index) {
    let loop;

    for(loop = 0; loop < 8; loop++){
        if(check_pos_valid(index, loop)){
            gEightQueen[index] = loop;

            if(7 == index){
                gCount ++, print();
                gEightQueen[index] = 0;
                return;
            }

            eight_queen(index + 1);
            gEightQueen[index] = 0;
        }
    }
}

function main(argc)
{
    eight_queen(0);
    console.log("total = %dn", gCount);
}

main()