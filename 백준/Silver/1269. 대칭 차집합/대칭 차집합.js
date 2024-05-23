const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const a = input[1].split(' ').map(Number)
const b = input[2].split(' ').map(Number)
const mapA = new Map(a.map(item => [item, true]))
const mapB = new Map(b.map(item => [item, true]))

let result = 0;
result += a.filter(item => !mapB.has(item)).length
result += b.filter(item => !mapA.has(item)).length
console.log(result)