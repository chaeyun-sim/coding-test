const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)
const s = new Map()
const check = input.slice(n + 1)
input.slice(1, n + 1).forEach(item => s.set(item, 0))

const result = check.filter(item => s.has(item)).length

console.log(result)