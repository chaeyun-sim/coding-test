const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, k]  = input[0].split(' ').map(Number)
const arr = input.slice(1).map(el => el.split(' ').map(Number))
const dp = new Array(k + 1).fill(0)

arr.sort((a, b) => a[0] - b[0]);

for (let i = 0; i < arr.length; i++) {
  const [weight, value] = arr[i]
  for (let j = k; j >= weight; j--) {
    dp[j] = Math.max(dp[j], dp[j - weight] + value);
	}
}

console.log(dp[k])