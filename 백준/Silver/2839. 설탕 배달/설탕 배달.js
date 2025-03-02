const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let n = Number(input[0])
let cnt = 0

while (1) {
  if (n < 0) return console.log(-1)
  if (n % 5 === 0) break; 

  n -= 3
  cnt++
}

console.log(Math.floor(n / 5) + cnt);