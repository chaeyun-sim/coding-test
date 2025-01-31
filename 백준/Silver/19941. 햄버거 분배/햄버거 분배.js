const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

const [n, k] = input[0].split(' ').map(Number)
const tc = input[1].split('')
const arr = [...tc]
let cnt = 0

for (let i = 0; i < n; i++) {
    if (arr[i] === 'H' || arr[i] === '*') continue;
    for (let j = -k; j <= k; j++) {
        if (j === 0) continue;
        if (arr[i + j] === 'H') {
            arr[i + j] = '*'
            cnt++
            break;
        }
    }
}

console.log(cnt)