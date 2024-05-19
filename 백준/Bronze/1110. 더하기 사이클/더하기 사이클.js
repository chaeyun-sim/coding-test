const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = Number(input[0])
let num = String(N);
let cnt = 1

while (num !== N) {
    let a = '';
    let b = '';
    
    if (num.length === 1 && Number(num) < 10) {
        a = '0'
        b = num[0]
    } else {
        a = num[0]
        b = num[1]
    }
    const sum = Number(a) + Number(b) + ''
    num = b + sum[sum.length - 1]
    
    if (Number(num) === N) break;

    cnt++
}

console.log(cnt)