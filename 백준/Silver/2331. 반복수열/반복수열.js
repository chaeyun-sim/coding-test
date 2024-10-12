const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [a, p] = input[0].split(' ').map(Number);

function bfs(startNode) {
    const visited = [];
    const map = new Map();
    const needVisit = [startNode];
    let index = 0;

    while (needVisit.length > 0) {
        const node = needVisit.shift();
        
        if (map.has(node)) return map.get(node)

        if (!visited.includes(node)) {
            visited.push(node)
            map.set(node, index)
            
            const newNumber = [...String(node)]
            .map(el => Number(el) ** p)
            .reduce((a, b) => a + b);
            needVisit.push(newNumber);
            
            index++
        }
    }
    
    return visited
}

console.log(bfs(a));