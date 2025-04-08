const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[0].split('');

let stack = [];
let cnt = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === '(') {
    stack.push(arr[i]);
  } else {
    stack.pop();
    if (arr[i - 1] === '(') {
      cnt += stack.length;
    } else {
      cnt += 1;
    }
  }
}

console.log(cnt);