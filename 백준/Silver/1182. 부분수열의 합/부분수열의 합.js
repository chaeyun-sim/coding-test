const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, s] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)
let cnt = 0

function dfs(index, sum){
    if (index === n) {
        if (sum === s && index > 0) cnt++
        return;
    }
    
    dfs(index + 1, sum)
    dfs(index + 1, sum + arr[index])
}

dfs(0, 0)

console.log(s === 0 ? cnt - 1 : cnt)