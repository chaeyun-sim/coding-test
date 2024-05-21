const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
let startNumber = 2
let cnt = 0
let result = 0

for (let cnt = 0; cnt < n; cnt++) {
    result = (startNumber + (startNumber - 1)) ** 2
    startNumber += (2 ** cnt)
}

console.log(result)