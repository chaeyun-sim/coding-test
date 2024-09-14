const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)
const selected = []
let result = ''

function dfs(depth) {
    if (depth === m) {
        result += (selected.join(' ') + '\n')
        return;
    }
    
    for (let i = 0; i < n; i++) {
        selected.push(i + 1)
        dfs(depth + 1)
        selected.pop()
    }
}

dfs(0)

console.log(result.trim())