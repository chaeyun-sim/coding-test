const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m, v] = input[0].split(" ").map(Number)
const arr = input.slice(1).map(el => el.split(' ').map(Number))
const graph = new Array(n + 1).fill([])

arr.forEach(item => {
    const [a, b] = item;
    graph[a] = [...graph[a], b]
    graph[b] = [...graph[b], a]
})

graph.forEach(el => el.sort((a, b) => a - b));

const visited = new Array(n + 1).fill(false)
const nodes = []

const dfs = (graph, node) => {
  visited[node] = true;
  nodes.push(node)
  
  for(const num of graph[node]){
    if(visited[num]) continue;
    dfs(graph, num);
  }
  
  return nodes
}

function bfs(graph) {
    let visited = []
    let willVisit = [v]
    
    while (willVisit.length > 0) {
        const node = willVisit.shift()
        if (!visited.includes(node)) {
            visited.push(node)
            willVisit = [...willVisit, ...graph[node]]
        }
    }
    
    return visited
}

console.log(dfs(graph, v).join(' '))
console.log(bfs(graph).join(' '))