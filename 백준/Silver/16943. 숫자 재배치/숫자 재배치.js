const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [a, b] = input[0].split(' ')
const arr = a.split('').sort((a, b) => b - a).map(Number)
const n = a.length
const visited = new Array(n).fill(false)
const selected = []
let flag = false
let result = ''

function dfs(depth) {
    if (depth === n) {
        if (Number(b) > Number(selected.join('')) && selected[0] !== 0) {
            result = selected.join('')
            flag = true
        }
        return;
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (visited[i]) continue;
        visited[i] = true
        selected.push(arr[i])
        dfs(depth + 1)
        visited[i] = false
        selected.pop()
        
        if (flag) return;
    }
}

dfs(0)

console.log(result || -1)