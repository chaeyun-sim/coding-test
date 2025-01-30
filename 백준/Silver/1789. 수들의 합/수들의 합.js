const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

let n = Number(input[0])
let cnt = 0;
let total = 0;

while (total <= n) {
  cnt++
  total += cnt
}

console.log(cnt - 1)