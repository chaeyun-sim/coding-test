const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, k] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(el => el.split(' ').map(Number))
const selected = []
let max = -Infinity;

function makeCombi(selected) {
    let sum = 0

    for (let i = 0; i < selected.length; i++) {
        for (let j = i + 1; j < selected.length; j++) {
            const [a, b] = [selected[i], selected[j]]
            sum += arr[a][b]
        }
    }
    return sum
}

function dfs(depth, start) {
    if (depth === k) {
        const sum = makeCombi(selected)
        max = Math.max(max, sum)
        return
    }

    for (let i = start; i < n; i++) {
        selected.push(i)
        maxValue = dfs(depth + 1, i + 1)
        selected.pop()
    }
}

dfs(0, 0)
console.log(max)