const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const total = Math.floor(Math.sqrt(n));
console.log(total);