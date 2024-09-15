const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const n = Number(input[0])
let cnt = 0

function dfs(depth, str) {
    if (depth === n) {
        if (Number(str) % 3 === 0 && str[0] !== '0') {
            cnt++
        }
        return;
    }
    
    for (let i = 0; i < 3; i++) {
        dfs(depth + 1, str + i)
    }
}

dfs(0, '')
console.log(cnt)