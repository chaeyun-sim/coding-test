const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b)
const visited = new Array(n).fill(false)
const selected = []

const result = new Set()

function dfs(depth) {
    if (depth === m) {
        result.add(selected.map(el => arr[el]).join('-'))
        return;
    }
    
    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        visited[i] = true
        selected.push(i)
        dfs(depth + 1)
        selected.pop()
        visited[i] = false
    }
}

dfs(0)
result.forEach(item => console.log(item.replaceAll('-', ' ')))