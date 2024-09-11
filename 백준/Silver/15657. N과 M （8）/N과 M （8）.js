const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, s] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b)
const selected = []
const result = []

function dfs(depth, start) {
    if (depth === s) {
        result.push([...selected])
        return;
    }
    
    for (let i = start; i < n; i++) {
        selected.push(arr[i])
        dfs(depth + 1, i)
        selected.pop()
    }
}

dfs(0, 0)

result.forEach(row => console.log(row.join(' ')))