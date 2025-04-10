const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const k = Number(input[0]);
const arr = input[1].split(' ').map(Number);
arr.sort((a, b) => a - b);

let sum = 0;

for (let i = 0; i < k; i++) {
  if (arr[i] > sum + 1) break;
  sum += arr[i];
}

console.log(sum + 1);