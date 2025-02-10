const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map(Number);

const dp = new Array(n + 1).fill(0);

dp[0] = arr[0];
dp[1] = arr[0] + arr[1];
dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2]); // 한 칸 뛰어 넘던가 연속으로 밟던가

for (let i = 3; i <= n; i++) {
  // -3 밟고 -1밟고 지금 밟거나 dp[i - 3] + arr[i - 1] + arr[i]
  // -2 밟고 지금 밟거나 dp[i - 2] + arr[i]
  dp[i] = Math.max(dp[i - 3] + arr[i - 1] + arr[i], dp[i - 2] + arr[i]);
}

console.log(dp[n - 1]);
