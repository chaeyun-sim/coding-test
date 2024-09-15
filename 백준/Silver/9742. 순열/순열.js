const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let visited = []
let selected = []
let cnt = 0
let found = false;

function dfs(depth, str, target) {
    if (depth === str.length) {
        if (cnt === target - 1) {
            console.log(`${str} ${target} = ${selected.join('')}`)
            found = true;
        }
        cnt++
        return;
    }
    
    for (let i = 0; i < str.length; i++) {
        if (visited[i]) continue;
        visited[i] = true
        selected.push(str[i])
        
        dfs(depth + 1, str, target)
        
        if (found) return;
        
        selected.pop()
        visited[i] = false
    }
}

input.forEach(item => {
    let [str, num] = item.split(' ')
    num = Number(num)
    
    selected = []
    visited = new Array(str.length).fill(false)
    cnt = 0
    found = false
    
    dfs(0, str, num)
    
    if (!found) console.log(`${str} ${num} = No permutation`)
  
})