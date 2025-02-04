const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)
const dp = new Array(n + 1).fill([]).map(() => new Array(n + 1).fill(0))

dp[0][0] = 1
dp[1][1] = 1
dp[1][0] = 1


for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) dp[i][j] = 1
        else dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
    }
}

console.log(dp[n - 1][m - 1])