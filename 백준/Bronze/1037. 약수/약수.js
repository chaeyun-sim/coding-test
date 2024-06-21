const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[1].split(' ').map(Number)
const min = Math.min(...arr);
const max = Math.max(...arr);
console.log(min * max)