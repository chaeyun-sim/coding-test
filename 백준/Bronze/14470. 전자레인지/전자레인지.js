const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [A, B, C, D, E] = input.map(Number)
let isFrozen = A < 0

if (isFrozen) {
    console.log((Math.abs(A) * C) + D + (B * E));
} else {
    console.log((B - A) * E);
}