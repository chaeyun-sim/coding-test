const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const dp = new Array(n + 1).fill(Infinity)

dp[1] = 1
dp[2] = 1

for (let i = 3; i <= n; i++) {
     dp[i] = dp[i - 1] + dp[i - 2]
}

console.log(dp[n], n - 2)