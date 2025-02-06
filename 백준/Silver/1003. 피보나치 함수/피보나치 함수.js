const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [T, ...arr] = input.map(Number)

arr.forEach(target => {
    const dp = new Array(target).fill(null).map(() => [])
    
    if (target === '0') return console.log('1 0')
    if (target === '1') return console.log('0 1')

    dp[0] = [1, 0]
    dp[1] = [0, 1]
    
    for (let i = 2; i <= target; i++) {
        const prev1 = dp[i - 1]
        const prev2 = dp[i - 2]
        dp[i] = [prev1[0] + prev2[0], prev1[1] + prev2[1]]
    }

    console.log(...dp[target])
})