const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const dx = [0, 1, 1, 1, 0, -1, -1, -1]; // 북 북동 동 남동 남 남서 서 북서
const dy = [-1, -1, 0, 1, 1, 1, 0, -1];

function dfs(x, y, visited, arr, m, n) {
  visited[x][y] = true;

  for (let i = 0; i < 8; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[nx][ny] && arr[nx][ny] === 1) {
      dfs(nx, ny, visited, arr, m, n);
    }
  }
}

let current = 0;
while (true) {
  const [n, m] = input[current].split(' ').map(Number);
  if (n === 0 && m === 0) break;

  const arr = [];
  for (let i = 1; i <= m; i++) {
    arr.push(input[current + i].split(' ').map(Number));
  }

  const visited = Array.from({ length: m }, () => Array(n).fill(false));

  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1 && !visited[i][j]) {
        dfs(i, j, visited, arr, m, n);
        count++;
      }
    }
  }

  console.log(count);
  current += m + 1;
}