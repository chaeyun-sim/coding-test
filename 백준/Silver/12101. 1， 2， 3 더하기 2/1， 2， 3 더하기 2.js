const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, k] = input[0].split(' ').map(Number);
const selected = [];
const result = []

function dfs(sum) {
    if (sum > n) return;
    if (sum === n) {
        result.push([...selected])
        return;
    }
    
    for (let i = 1; i < 4; i++) {
        selected.push(i);
        dfs(sum + i);
        selected.pop();
    }
}

dfs(0);

console.log(result.length >= k ? result[k - 1].join('+') : -1)