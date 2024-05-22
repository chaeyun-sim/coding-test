const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function isPrime(n) {
    if (n === 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i+= 2) {
        if (n % i === 0) {
            return false;
        }
    }
    
    return true;
}

input.map(Number).forEach(num => {
    if (num) {
        let cnt = 0
        for (let i = num + 1; i <= num * 2; i++) {
            if (isPrime(i)) {
                cnt++
            }
        }
        console.log(cnt)
    }
})