const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
let result = [];
let sequence = [];

function dfs(depth) {
    if (depth === m) {
        result.push(sequence.join(' '));
        return;
    }

    for (let i = 0; i < n; i++) {
        sequence.push(arr[i]);
        dfs(depth + 1);
        sequence.pop();
    }
}

dfs(0);
console.log([...new Set(result)].join('\n'));