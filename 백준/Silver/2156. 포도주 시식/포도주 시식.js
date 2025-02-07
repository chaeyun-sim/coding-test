const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [T, ...arr] = input.map(Number)
const dp = new Array(T + 1).fill(0)

dp[1] = arr[0]
dp[2] = arr[0] + arr[1]

for (let i = 3; i <= T; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i - 1], dp[i - 3] + arr[i - 2] + arr[i - 1])
}


console.log(dp[T])