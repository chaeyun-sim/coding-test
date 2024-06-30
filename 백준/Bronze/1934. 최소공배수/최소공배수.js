const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.slice(1).map(el => el.split(' ').map(Number));

function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

arr.forEach(item => {
    const [A, B] = item;
    console.log((A * B) / gcd(A, B));
});
