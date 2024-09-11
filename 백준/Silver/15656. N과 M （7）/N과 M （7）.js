const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
const selected = [];
const result = [];

function dfs(depth) {
    if (depth === m) {
        result.push(`${selected.join(' ')}\n`);
        return;
    }
    
    for (let i = 0; i < n; i++) {
        selected.push(arr[i]);
        dfs(depth + 1);
        selected.pop();
    }
}

dfs(0);

console.log(result.join(''))