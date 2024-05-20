const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let n = input[0];
let b = Number(input[1])

console.log(parseInt(n, b));
