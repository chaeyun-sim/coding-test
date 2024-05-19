const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input)
let arr = new Array(n).fill(0).map((_, i) => i + 1)

while (arr.length > 1) {
    arr = arr.filter((_, i) => i % 2 === 1)
}

console.log(arr[0])