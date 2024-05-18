const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const cnt = Number(input[0])
const arr = input.slice(1).filter((_, i) => i % 2)

for (i = 0; i < cnt; i++) {
    const list = arr[i].split(' ').map(Number)
    const min = Math.min(...list)
    const max = Math.max(...list)
    console.log(`${min} ${max}`)
}