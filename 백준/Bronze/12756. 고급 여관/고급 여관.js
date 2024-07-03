const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [attackA, healthA] = input[0].split(' ').map(Number);
let [attackB, healthB] = input[1].split(' ').map(Number);

while (healthA > 0 && healthB > 0) {
    healthA -= attackB;
    healthB -= attackA;
}

if (healthA > 0 && healthB <= 0) {
    console.log('PLAYER A');
} else if (healthB > 0 && healthA <= 0) {
    console.log('PLAYER B');
} else {
    console.log('DRAW');
}