const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, k, ...arr] = input
n = Number(n)
arr = arr.map(el => el.split(' ').map(Number))
let graph = new Array(n + 1).fill().map((_, i) => [])
for (let i = 0; i < k; i++) {
    let [x, y] = arr[i]
    graph[x].push(y)
    if (y < k + 1) graph[y].push(x)   
}
let visited = Array(n).fill(false);

let cnt = 0
function dfs(graph, v, visited) {
    visited[v] = true
    if (v !== 1) cnt++
    for (i of graph[v]) {
        if (!visited[i]) {
            dfs(graph, i, visited)
        }
    }
}

dfs(graph, 1, visited)
console.log(cnt)