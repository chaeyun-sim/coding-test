const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, k] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)

let maxSum = 0;
let currentSum = 0;

for (let i = 0; i < k; i++) {
    currentSum += arr[i];
}

maxSum = currentSum;

for (let i = k; i < n; i++) {
    currentSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, currentSum);
}

console.log(maxSum)