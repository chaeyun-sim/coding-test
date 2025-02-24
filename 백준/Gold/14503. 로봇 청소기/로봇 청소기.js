const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let [r, c, d] = input[1].split(' ').map(Number);
const arr = input.slice(2).map(el => el.split(' ').map(Number));

let cnt = 0;
const dx = [-1, 0, 1, 0]; // 북 동 남 서
const dy = [0, 1, 0, -1];

const isValid = (a, b) => a >= 0 && a < n && b >= 0 && b < m;

while (1) {
  if (arr[r][c] === 0) {
    arr[r][c] = 2;
    cnt++;
  }

  let hasCleanable = false;

  for (let i = 0; i < 4; i++) {
    d = (d + 3) % 4;
    const nx = r + dx[d];
    const ny = c + dy[d];

    if (isValid(nx, ny) && arr[nx][ny] === 0) {
      r = nx;
      c = ny;
      hasCleanable = true;
      break;
    }
  }

  if (!hasCleanable) {
    const nx = r - dx[d];
    const ny = c - dy[d];

    if (isValid(nx, ny) && arr[nx][ny] !== 1) {
      r = nx;
      c = ny;
    } else {
      console.log(cnt);
      break;
    }
  }
}
