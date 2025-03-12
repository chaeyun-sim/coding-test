const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map(el => el.split(' ').map(Number));

const dp = new Array(n + 1).fill(0);

for (let i = 0; i < n; i++) {
  const [t, p] = arr[i];
  const nextDay = i + t;

  // 범위 내 확인
  if (nextDay <= n) {
    dp[nextDay] = Math.max(dp[nextDay], dp[i] + p); // 해당 일자의 값과 오늘 값 + 오늘 point
  }

  dp[i + 1] = Math.max(dp[i + 1], dp[i]); // 진행하지 않는다면 오늘 또는 어제 중 더 높은 값 유지
}

console.log(dp[n]);
