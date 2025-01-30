const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

const n = 1000 - Number(input[0])
const amounts = ['500', '100', '50', '10', '5', '1']
let left = n
let cnt = 0

amounts.forEach(amount => {
    if (n < amount || !left) return;
    cnt += Math.floor(left / amount)
    left %= amount
})

console.log(cnt)