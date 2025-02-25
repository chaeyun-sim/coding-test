const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const target = Number(input[1]);

const arr = Array.from({ length: n }, () => Array(n).fill(0));

// 방향: 남, 동, 북, 서
const direction = [
  // y, x
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

let num = n * n;
let d = 0;
let y = 0;
let x = 0;
let result = '';

const isValid = (ny, nx) => ny >= 0 && ny < n && nx >= 0 && nx < n && !arr[ny][nx];

while (num > 0) {
  arr[y][x] = num;
  if (num === target) result = `${y + 1} ${x + 1}`;
  num--;

  const ny = y + direction[d][0];
  const nx = x + direction[d][1];

  if (!isValid(ny, nx)) d = (d + 1) % 4;

  y += direction[d][0];
  x += direction[d][1];
}

arr.forEach(row => console.log(row.join(' ')));
console.log(result);
