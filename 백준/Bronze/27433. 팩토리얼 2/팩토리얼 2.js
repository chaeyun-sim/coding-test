const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])

function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num - 1)
}

console.log(factorial(n))