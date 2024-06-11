const fs = require("fs")
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, k] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(el => el.split(" ").map(Number))
const dx = [0, 1, 1, 1, 0, -1, -1, -1]
const dy = [1, 1, 0, -1, -1, -1, 0, 1]

function check(x, y) {
    let cnt = 0
    for (let i = 0; i < dx.length; i++) {
        let nx = x + dx[i]
        let ny = y + dy[i]
        const isValid = nx >= 0 && nx < n && ny >= 0 && ny < n
        
        if (isValid && arr[ny][nx] === 1) {            
            cnt++
        }
    }
    return cnt === k
}

let total = 0
for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
        if (arr[y][x] !== 1 && check(x, y)) {
            total++
        }
    }
}

console.log(total)
