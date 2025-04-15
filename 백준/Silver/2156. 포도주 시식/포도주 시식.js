const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map(Number);
const dp = Array.from({ length: n + 1 }, () => 0);

dp[1] = arr[0];
dp[2] = Math.max(arr[1], arr[0] + arr[1]);

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i - 1], dp[i - 3] + arr[i - 1] + arr[i - 2]);
}

console.log(dp[n]);