const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.slice(1)
arr.sort()

let cnt = 0;
for (let i = 1; i < arr.length; i++){
    if (!arr[i].startsWith(arr[i - 1])) {
        cnt++
    }
}

console.log(cnt + 1)