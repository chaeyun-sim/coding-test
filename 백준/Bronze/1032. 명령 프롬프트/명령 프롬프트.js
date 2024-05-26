const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1)
let answer = ''

function solution() {
    for (let i = 0; i < arr[0].length; i++) {
        const filtered = arr.filter(el => el[i] === arr[0][i])
        if (filtered.length !== n) {
            answer += '?'
        } else {
            answer += arr[0][i]
        }
    }
    
    return answer;
}

console.log(arr.length === 1 ? arr[0] : solution())