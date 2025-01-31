const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const tc = input.slice(1).map(el => el.split(' ').map(Number))
tc.sort((a, b) => a[1] - b[1] || a[0] - b[0])

let cnt = 1
let lastEndTime = tc[0][1]

for (let i = 1; i < n; i++) {
    const [start, end] = tc[i];
    
    if (lastEndTime <= start) {
        lastEndTime = end
        cnt++
    }
}

console.log(cnt)