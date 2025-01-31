const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

const n = Number(input[0])
const a = input[1].split(' ').map(Number)
const b = input[2].split(' ').map((el, i) => [i, Number(el)])

a.sort((a, b) => a - b)
b.sort((a, b) => b[1] - a[1])

let sum = 0
for (let i = 0; i < n; i++) {
    const result = a[i] * b[i][1]
    sum += result
}

console.log(sum)