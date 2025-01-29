const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

const arr = input[1].split(' ').map((n, i) => Number(n))
arr.sort((a, b) => a - b)

let total = arr[0]
arr.reduce((acc, cur) => {
    total += (acc + cur)
    return acc + cur
})

console.log(total)