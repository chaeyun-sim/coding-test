const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const year = Number(input)
console.log(+((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)))