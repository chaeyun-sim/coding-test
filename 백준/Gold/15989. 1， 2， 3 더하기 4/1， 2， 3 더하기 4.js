const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')


const [T, ...arr] = input.map(Number)

arr.forEach(n => {
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    let nums = [1, 2, 3];

    for (let num of nums) {
        for (let i = num; i <= n; i++) {  
            dp[i] += dp[i - num];  
        }
    }

    console.log(dp[n])
})