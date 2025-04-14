const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [m, n] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let answer = 0;

function check(mid) {
  let cnt = 0;
  for (let length of arr) {
    cnt += Math.floor(length / mid);
  }
  return cnt >= m;
}

let left = 1;
let right = Math.max(...arr);

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  if (check(mid)) {
    if (answer < mid) {
      answer = mid;
    }
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(answer);