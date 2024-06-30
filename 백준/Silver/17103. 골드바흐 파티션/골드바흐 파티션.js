const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map(Number);
const max = Math.max(...arr);

function sieve(max) {
    const isPrime = Array(max + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= max; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= max; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return isPrime;
}

const isPrime = sieve(max);
const primes = [];

for (let i = 2; i <= max; i++) {
    if (isPrime[i]) {
        primes.push(i);
    }
}

arr.forEach(num => {
    const result = new Set();

    for (let i = 0; i < primes.length && primes[i] <= num / 2; i++) {
        const p = primes[i];
        if (isPrime[num - p]) {
            result.add(`${p},${num - p}`);
        }
    }

    console.log(result.size);
});
