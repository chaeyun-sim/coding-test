const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(el => el.split(' ').map(Number));

const dir = [-1, 0, 1];
const dp = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => Array(3).fill(Infinity))
);

for (let j = 0; j < m; j++) {
  dp[0][j] = [arr[0][j], arr[0][j], arr[0][j]];
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j < m; j++) {
    for (let d = 0; d < 3; d++) {
      const nj = j + dir[d];
      if (nj < 0 || nj >= m) continue;

      for (let pd = 0; pd < 3; pd++) {
        if (pd === d) continue; 
        dp[i][j][d] = Math.min(dp[i][j][d], dp[i - 1][nj][pd] + arr[i][j]);
      }
    }
  }
}

console.log(Math.min(...dp[n - 1].flat()));