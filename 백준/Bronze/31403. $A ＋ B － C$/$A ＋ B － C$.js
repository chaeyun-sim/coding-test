const fs = require("fs")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [a, b, c] = input.map(Number)
console.log(a + b - c)
console.log(String(a) + String(b) - String(c))