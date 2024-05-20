const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [m, n] = input.map(Number)
let sum = 0
let min = Infinity;

const isPrime = (num) => {
    if (num < 2) return false;
    for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) {
            return false;
        }
    }
    return true
}

for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
        min = Math.min(i, min)
        sum += i
    }
}

if (sum > 0 && min !== Infinity) {
    console.log(sum)
    console.log(min)
} else {
    console.log(-1)
}