const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const str = input[0]
let limit = 1
const result = new Set()

while (limit <= str.length) {
    for (let i = 0; i <= str.length - limit; i++) {
        const string = str.substr(i, limit)
        result.add(string)
    }
    limit++
}

console.log(result.size)