const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map(el => el.split(' ').map(Number));

const DIRECTIONS_NUM = 4;
const dx = [0, 1, 0, -1]; // 위 우 아래 좌
const dy = [1, 0, -1, 0];

const isValid = (nx, ny) => nx >= 0 && nx < n && ny >= 0 && ny < n;

const dfs = (x, y, visited, height) => {
  visited[x][y] = true;

  for (let i = 0; i < DIRECTIONS_NUM; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (isValid(nx, ny) && arr[nx][ny] > height && !visited[nx][ny]) {
      dfs(nx, ny, visited, height);
    }
  }
};

let max = 0;

for (let height = 0; height <= Math.max(...arr.flat()); height++) {
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  let cnt = 0;

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (arr[y][x] > height && !visited[y][x]) {
        dfs(y, x, visited, height);
        cnt++;
      }
    }
  }

  max = Math.max(max, cnt);
}

console.log(max);