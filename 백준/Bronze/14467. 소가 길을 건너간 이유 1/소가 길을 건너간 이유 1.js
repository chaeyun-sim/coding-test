const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const testCases = input.slice(1).map(el => el.split(' ').map(Number))
const map = new Map()
let crossings = 0

testCases.forEach(([cow, position]) => {
    if (map.has(cow)) {
        if (map.get(cow) !== position) {
            crossings++
            map.set(cow, position)
        }
    } else {
        map.set(cow, position)
    }
})

console.log(crossings)