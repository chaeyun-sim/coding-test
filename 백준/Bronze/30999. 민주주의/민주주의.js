const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(el => el.split(''));
const minVal = Math.ceil(m / 2);
let cnt = 0;

arr.forEach(item => {
  const agrees = item.filter(el => el === 'O').length;
  if (agrees >= minVal) cnt++;
});

console.log(cnt);
