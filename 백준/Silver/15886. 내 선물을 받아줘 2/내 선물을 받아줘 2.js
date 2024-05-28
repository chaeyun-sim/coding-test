const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input[1].split('')
let cnt = 0 

for (let i = 1; i < n; i++) {
    if (arr[i - 1] === 'E' && arr[i] === 'W') {
        cnt++
    }
}

console.log(cnt)