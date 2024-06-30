const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [A, B] = input[0].split(' ').map(Number)

function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    
    return a
}

console.log((A * B) / gcd(A, B));