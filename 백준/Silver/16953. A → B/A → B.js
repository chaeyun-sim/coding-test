const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, target] = input[0].split(' ').map(Number)
let cnt = 1

while (true) {
    if (target < n) {
        console.log(-1)
        return;
    }
    
    if (target === n) {
        console.log(cnt)
        return;
    }
    
    if (target % 2 && String(target).endsWith('1')) {
        target = Number(String(target).slice(0, -1))  
    } else {
        target /= 2
    }
    cnt++
}