const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = new Array(n)
  .fill(0)
  .map((_, i) => i + 1)
  .reverse();

const result = [];

for (let i = 0; i < n; i++) {
  result.push(arr.pop());
  arr.unshift(arr.pop());
}

console.log(result.join(' '));