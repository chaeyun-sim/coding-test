const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [a1, a0] = input[0].split(' ').map(Number)
const c = Number(input[1])
const n0 = Number(input[2])

function f(n) {
    return a1 * n + a0;
}

function g(n) {
    return n;
}

function isBigO() {
    for (let n = n0; n <= 100; n++) {
        if (f(n) > c * g(n)) {
            return false;
        }
    }
    return true;
}

console.log(+(isBigO()))
