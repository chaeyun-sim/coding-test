const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const k = Number(input[0])
const arr = input.slice(1)
const selected = []
let visited = []

function dfs(depth, string) {
    if (depth === string.length) {
        console.log(selected.map(el => string[el]).join(''))
    }
    
    for (let i = 0; i < string.length; i++) {
        if (visited[i]) continue;
        visited[i] = true
        selected.push(i)
        dfs(depth + 1, string)
        selected.pop()
        visited[i] = false
    }
}

arr.forEach((str, i) => {
    visited = new Array(str.length).fill(false)
    console.log(`Case # ${i + 1}:`)
    dfs(0, str)
})