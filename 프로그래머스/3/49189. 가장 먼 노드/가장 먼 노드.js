function solution(n, edge) {
    const graph = Array.from({ length: n + 1 }, () => [])
    
    edge.forEach(([a, b]) => {
        graph[b].push(a)
        graph[a].push(b)
    })
    
    const distance = Array.from({ length: n + 1}, () => 0)
    const visited = Array.from({ length: n + 1}, () => false)
        
    function bfs(v) {
        const queue = [v]
        visited[v] = true
        
        while (queue.length > 0) {
            const current = queue.shift()
            
            graph[current].forEach(n => {
                if (!visited[n]) {
                    queue.push(n)
                    distance[n] = distance[current] + 1
                    visited[n] = true
                }
            })
        }
    }
    
    bfs(1)
    const max = Math.max(...distance)
    
    let cnt = 0
    distance.forEach(el => {
        if (el === max) cnt++
    })
    
    return cnt
}