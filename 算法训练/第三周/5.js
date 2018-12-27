/**
 * Created by yuan on 2018/12/26.
 */
//左边的值比右边小 上边的值比下边小

function in_array(A, x) {
    let vl = 0, vr = A.length - 1,
        ml = 0, mr = A[0].length - 1,
        m_guess = 0, v_guess = 0
    let count = 0
    while (count <= 3 && (vl <= vr || ml <= mr)) {
        count++
        m_guess = Math.floor((ml + mr) / 2)
        v_guess = Math.floor((vl + vr) / 2)
        /* console.log('vl',vl,'vr',vr,'ml',ml,'mr',mr,'value','v_guess',v_guess,'m_guess',m_guess,
         'value',A[v_guess][m_guess])*/
        if (vr - vl == 1 || mr - ml == 1) {
            var flag = false
            for (var i = vl; i <= vr; i++) {
                for (var j = ml; j <= mr; j++) {
                    if (A[i][j] == x) {
                        flag = true
                        break;
                    }
                }
            }
            return flag
        } else if (A[v_guess][m_guess] === x) {
            return true
        }
        else if (A[v_guess][m_guess] > x) {
            mr = m_guess
        } else {
            ml = m_guess
        }
    }
    return false
}
const A = [
    [1, 4, 8, 12, 26],
    [2, 5, 9, 13, 28],
    [3, 6, 10, 18, 29],
    [8, 9, 13, 20, 30],
]


//console.log(in_array(A, 29)); // true
//console.log(in_array(A, 100)); // false
