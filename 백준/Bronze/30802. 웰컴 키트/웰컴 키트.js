const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0]);
const sizes = input[1].split(' ').map(Number);
const [t, p] = input[2].split(' ').map(Number);

const totalTshirtBundles = sizes.reduce((total, size) => total + Math.ceil(size / t), 0);

const penBundles = Math.floor(n / p);
const individualPens = n % p;

console.log(totalTshirtBundles);
console.log(`${penBundles} ${individualPens}`);