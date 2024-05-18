const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1).map(el => el.split(' '));

arr.forEach(item => {
    const [num1, num2] = item;
    const sum = BigInt('0b' + num1) + BigInt('0b' + num2);
    console.log(sum.toString(2));
});
