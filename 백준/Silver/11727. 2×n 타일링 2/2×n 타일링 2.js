const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = []
arr[0] = 1
arr[1] = 1
arr[2] = 3

for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2] * 2) % 10007;
}

console.log(arr[n])