const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input[1].split(' ').map(Number)
const result = new Array(n).fill(null);

for (let i = 0; i < n; i++) {
    let cnt = arr[i]
    
    for (let j = 0; j < n; j++) {
        if (cnt === 0 && result[j] === null) {
            result[j] = i + 1;
            break;
        } else if (result[j] === null) {
            cnt--
        }
    }
}

console.log(result.join(' '))