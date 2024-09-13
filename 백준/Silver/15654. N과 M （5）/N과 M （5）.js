const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b)
const visited = new Array(n).fill(false);
const selected = []

function dfs(depth) {
    if (depth === m) {
        console.log(selected.join(" "))
    }
    
    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        visited[i] = true
        selected.push(arr[i])
        dfs(depth + 1)
        selected.pop()
        visited[i] = false
    }
}

dfs(0)