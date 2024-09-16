const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let max = -Infinity

function dfs(pos, cnt, snowballSize) {
    if (cnt === m || pos === n) {
        max = Math.max(max, snowballSize)
        return;
    }
    
    if (pos + 1 <= n) {
        dfs(pos + 1, cnt + 1, snowballSize + arr[pos]);
    }

    if (pos + 2 <= n) {
        const newSnowball = Math.floor(snowballSize / 2) + arr[pos + 1]
        dfs(pos + 2, cnt + 1, newSnowball);
    }
}

dfs(0, 0, 1);

console.log(max)