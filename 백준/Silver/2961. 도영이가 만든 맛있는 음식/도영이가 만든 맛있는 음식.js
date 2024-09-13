const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0]);
const arr = input.slice(1).map(el => el.split(' ').map(Number));
const selected = [];
let min = Infinity;

function dfs(depth, start, sour, bitter) {
    if (depth > 0) {
        const diff = Math.abs(sour - bitter);
        min = Math.min(min, diff);
        
        if (min === 0) return;
    }

    for (let i = start; i < n; i++) {
        selected.push(i);
        dfs(depth + 1, i + 1, sour * arr[i][0], bitter + arr[i][1]);
        selected.pop();
    }
}

dfs(0, 0, 1, 0);
console.log(min);