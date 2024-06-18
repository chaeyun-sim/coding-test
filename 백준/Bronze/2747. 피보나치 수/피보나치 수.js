const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0]);

function fibonacci(n) {
    if (n <= 1) return 1;
    
    let a = 1, b = 1;
    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

console.log(fibonacci(n - 1));