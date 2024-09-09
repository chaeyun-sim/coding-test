const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [n, m] = input[0].split(' ').map(Number)
const arr = new Array(n).fill(0).map((_, i) => i + 1)
const selected = []

function dfs(arr, depth) {
    if (depth === m) {
        for (let i = 1; i < selected.length; i++) {
            if (selected[i - 1] > selected[i]) return;
        }
        console.log(selected.join(' '))
        return;
    }
    
    for (let i = 1; i <= arr.length; i++) {
        selected.push(i)
        dfs(arr, depth + 1);
        selected.pop()
    }
}

dfs(arr, 0)