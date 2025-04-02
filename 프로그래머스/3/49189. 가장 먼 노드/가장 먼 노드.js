function solution(n, edge) {
    const graph = Array.from({ length: n + 1 }, () => [])
    
    edge.forEach(([a, b]) => {
        graph[b].push(a)
        graph[a].push(b)
    })
    
    const distance = Array.from({ length: n + 1}, () => 0)
    const visited = new Set()
        
    function bfs(v) {
        const queue = [v]
        visited.add(v)
        
        while (queue.length > 0) {
            const current = queue.shift()
            console.log(current)
            
            graph[current].forEach(n => {
                if (!visited.has(n)) {
                    queue.push(n)
                    distance[n] = distance[current] + 1
                    visited.add(n)
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