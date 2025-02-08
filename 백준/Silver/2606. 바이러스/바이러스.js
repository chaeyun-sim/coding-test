const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const T = Number(input[1])
const arr = input.slice(2).map(el => el.split(' ').map(Number))

const graph = Array.from({ length: n + 1}, () => [])
const visited = new Array(n + 1).fill(false)

arr.forEach(([a, b]) => {
    graph[a].push(b)
    graph[b].push(a)
})

const result = []

function dfs(graph, v, visited) {
    visited[v] = true
    result.push(v)

    for (let i = 0; i < graph[v].length; i++) {
        const num = graph[v][i]
        if (!visited[num]) {
            dfs(graph, num, visited)
        }
    }
}

dfs(graph, 1, visited)

console.log(result.length - 1)