const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map(el => el.split(' ').map(Number));

const dp = Array.from({ length: n }, () => Array(3).fill(Infinity));

for (let i = 0; i < 3; i++) {
  dp[0][i] = arr[0][i];
}

for (let i = 1; i < n; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + arr[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + arr[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + arr[i][2];
}

console.log(Math.min(...dp[n - 1]));