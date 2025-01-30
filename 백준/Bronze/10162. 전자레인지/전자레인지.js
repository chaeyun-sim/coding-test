const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

const n = Number(input[0])
let leftTime = n
const amounts = [300, 60, 10]

const result = amounts.map(amount => {
    if (amount <= n) {
        const count = Math.floor(leftTime / amount)
        leftTime %= amount
        return count
    } else {
        return 0
    }
})

console.log(leftTime ? -1 : result.join(' '))