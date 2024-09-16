const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)

function isPrime(num) {
    if (num === 2) return true
    if (num === 1 || num % 2 === 0) return false
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false
    }
    return true
}

const result = new Set()

function dfs(start, depth, sum) {
    if (depth === m) {
        if (isPrime(sum)) result.add(sum)
        return;
    }
    
    for (let i = start; i < n; i++) {
        dfs(i + 1, depth + 1, sum + arr[i])
    }
}

dfs(0, 0, 0)

if (result.size > 0) {
    console.log([...result].sort((a, b) => a - b).join(' '));
} else {
    console.log(-1);
}