const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [x1, y1, a, x2, y2, b] = input[0].split(' ').map(Number)

let determinant = x1 * y2 - x2 * y1

let x = (a * y2 - b * y1) / determinant
let y = (x1 * b - x2 * a) / determinant

console.log(`${x} ${y}`)