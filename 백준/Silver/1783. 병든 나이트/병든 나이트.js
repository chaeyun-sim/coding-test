const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

if (n === 1) return console.log(1);
if (n === 2) return console.log(Math.min(4, Math.floor((m + 1) / 2)));
if (m < 7) return console.log(Math.min(4, m));
console.log(m - 2);