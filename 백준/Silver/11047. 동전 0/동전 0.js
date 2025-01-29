const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

let [_, total] = input[0].split(' ').map(Number)
const moneys = input.slice(1).map(Number).sort((a, b) => b - a)
let cnt = 0
let left = total;

moneys.forEach(money => {
    if (left <= 0) return;
    if (money <= total) {
        cnt += Math.floor(left / money)
        left %= money
    }
    
})

console.log(cnt)