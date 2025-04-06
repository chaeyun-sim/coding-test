const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = [...input[1]].reverse()
console.log(arr.slice(0, 5).reverse().join(''))