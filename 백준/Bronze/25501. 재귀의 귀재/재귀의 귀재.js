const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.slice(1)

function recursion(string, start, end, cnt) {
    if (start >= end) return [1, cnt];
    else if (string[start] !== string[end]) {
        return [0, cnt]
    }
    return recursion(string, start + 1, end - 1, cnt + 1)
}


arr.forEach(str => {
    const result = recursion(str, 0, str.length - 1, 1)
    console.log(result.join(' '))
})