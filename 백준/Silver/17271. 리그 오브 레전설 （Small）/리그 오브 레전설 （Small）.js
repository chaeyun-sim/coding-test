const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const [n, m] = input.map(Number);
const MOD = 1000000007;

const dp = Array(n + 1).fill(0);
dp[0] = 1;

for (let i = 1; i <= n; i++) {
  dp[i] = dp[i - 1];
  if (i >= m) {
    dp[i] = (dp[i] + dp[i - m]) % MOD;
  }
}

console.log(dp[n]);