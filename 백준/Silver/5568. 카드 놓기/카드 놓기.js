const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, k, ...arr] = input
n = Number(n)
k = Number(k)
const visited = new Array(n).fill(false)
const sets = new Set()

function dfs(depth, str) {
    if (depth === k) {
        sets.add(Number(str))
    }
    
    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        visited[i] = true
        dfs(depth + 1, str + arr[i])
        visited[i] = false
    }
}

dfs(0, '')
console.log(sets.size)