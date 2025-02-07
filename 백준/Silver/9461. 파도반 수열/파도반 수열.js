const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [T, ...arr] = input.map(Number)
const dp = new Array(T + 1).fill(0)

dp[1] = 1
dp[2] = 1
dp[3] = 1

arr.forEach(target => {
    for (let i = 4; i <= target; i++) {
        dp[i] = dp[i - 2] + dp[i - 3]
    }
    console.log(dp[target])
})