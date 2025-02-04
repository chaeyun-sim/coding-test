const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(el => el.split(' ').map(Number))

const dp = Array(n + 1).fill(0);

for (let i = 0; i < m; i++) {
    const [spendDate, pages] = arr[i];
    for (let j = n; j >= spendDate; j--) {
        dp[j] = Math.max(dp[j], dp[j - spendDate] + pages);
    }
}

console.log(dp[n]);