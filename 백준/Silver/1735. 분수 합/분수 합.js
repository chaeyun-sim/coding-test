const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [a1, b1, a2, b2] = input.map(el => el.split(' ').map(Number)).flat()

function gcd(a, b) {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

if (b1 % b2 === 0) {
   const num = b1 / b2
   a2 *= num
   b2 *= num
} else if (b2 % b1 === 0) {
    const num = b2 / b1
    a1 *= num
    b1 *= num
} else {
    let calculation = lcm(b1, b2)
    a1 *= (calculation / b1)
    b1 *= (calculation / b1)
    a2 *= (calculation / b2)
    b2 *= (calculation / b2)
}

let newA = a1 + a2
let newB = b1
const calc = gcd(newA, newB)
if (gcd(newA, newB) !== 1) {
    newA /= calc
    newB /= calc
}
console.log(newA, newB)