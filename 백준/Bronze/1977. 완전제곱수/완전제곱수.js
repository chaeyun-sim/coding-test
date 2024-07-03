const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let sum = 0;
let min = Infinity;
const [a, b] = input.map(Number)

for (let i = a; i <= b; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
        sum += i
        min = Math.min(min, i)
    }
}

if (sum === 0) {
    console.log(-1)
} else {
    console.log(sum)
    console.log(min)
}