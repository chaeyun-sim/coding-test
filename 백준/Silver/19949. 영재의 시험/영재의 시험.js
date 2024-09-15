const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const n = 10
const answer = input[0].split(' ').map(Number)
let cnt = 0

function checkCorrectScores(points) {
    let score = 0
    for (let i = 0; i < points.length; i++) {
        if (points[i] === answer[i]) score++
    }
    return score
}

function dfs(depth, points) {
    if (depth === 10) {
        if (checkCorrectScores(points) >= 5) cnt++
        return;
    }
    
    for (let i = 1; i <= 5; i++) {
        if (depth > 1 && points[depth - 2] === points[depth - 1] && points[depth - 1] === i) continue;
        dfs(depth + 1, [...points, i])
    }
}

dfs(0, [])
console.log(cnt)