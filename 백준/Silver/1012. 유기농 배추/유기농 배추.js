const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const T = Number(input[0]);
let current = 1;

for (let i = 0; i < T; i++) {
  const [m, n, k] = input[current].split(' ').map(Number);
  const graph = Array.from({ length: n }, () => Array(m).fill(0));
  const direction = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ]; //상하좌우

  for (let j = 1; j <= k; j++) {
    const [x, y] = input[current + j].split(' ').map(Number);
    graph[y][x] = 1;
  }

  function dfs(x, y) {
    if (x < 0 || x >= m || y < 0 || y >= n || graph[y][x] !== 1) return;

    graph[y][x] = 0;

    for (let [dx, dy] of direction) {
      dfs(x + dx, y + dy);
    }
  }

  let cnt = 0;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (graph[y][x] === 1) {
        dfs(x, y);
        cnt++;
      }
    }
  }

  console.log(cnt);

  current += k + 1;
}