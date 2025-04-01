const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(input);
const dp = Array(n + 1).fill(0n);

dp[1] = 1n;
dp[2] = 1n;
dp[3] = 1n;

for (let i = 4; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 3];
}

console.log(dp[n].toString());