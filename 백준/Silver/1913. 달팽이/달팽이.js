const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const m = Number(input[1])
const arr = new Array(n * n).fill(0)

const dx = [0, 1, 0, -1]
const dy = [-1, 0, 1, 0]
let matrix = Array.from({ length: n }, () => Array(n).fill(0));

let num = n * n;
let x = 0;
let y = 0;
let dir = 0;
const isValid = (nx, ny) => nx < 0 || nx >= n || ny < 0 || ny >= n || matrix[nx][ny] !== 0
let result = ''

while (num > 0) {
    matrix[x][y] = num--;
        
    let nx = x + dx[dir];
    let ny = y + dy[dir];

    if (isValid(nx, ny)) {
        dir = (dir + 1) % 4;
        nx = x + dx[dir];
        ny = y + dy[dir];
    }
    
    if (matrix[x][y] === m) {
        result += `${x + 1} ${y + 1}`
    }
    
    x = nx;
    y = ny;
}


matrix.forEach(row => console.log(row.join(' ')))
console.log(result)
