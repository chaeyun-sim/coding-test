const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const dp = new Array(n + 1).fill([0, 0])

dp[1] = [1, 0]  // a b

for (let i = 2; i <= n + 1; i++) {
    dp[i] = [dp[i - 1][1], dp[i - 1][0] + dp[i - 1][1]]
}

console.log(dp[n + 1][0], dp[n + 1][1])