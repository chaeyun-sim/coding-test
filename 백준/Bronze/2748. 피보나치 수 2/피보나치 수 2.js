const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])

const dp = new Array(n + 1).fill(BigInt(0))

dp[1] = BigInt(1)
dp[2] = BigInt(1)

for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
}

console.log(String(dp[n]))