const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m, a, b] = input[0].split(' ').map(Number);
const prohibitedSection = new Set();

for (let i = 1; i <= m; i++) {
  const [start, end] = input[i].split(' ').map(Number);
  for (let j = start; j <= end; j++) {
    prohibitedSection.add(j);
  }
}

const dp = new Array(n + 1).fill(Infinity);
dp[0] = 0;

for (let i = 0; i <= n; i++) {
  if (dp[i] === Infinity || prohibitedSection.has(i)) continue;

  for (const add of [a, b]) {
    const next = i + add;
    if (next <= n && !prohibitedSection.has(next)) {
      dp[next] = Math.min(dp[next], dp[i] + 1);
    }
  }
}

console.log(dp[n] === Infinity ? -1 : dp[n]);