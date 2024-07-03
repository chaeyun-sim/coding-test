const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let str = input[0];
const word = input[1];
const wordLength = word.length;
let result = [];

for (let i = 0; i < str.length; i++) {
    result.push(str[i]);
    if (result.length >= wordLength) {
        if (result.slice(-wordLength).join('') === word) {
            result.length -= wordLength;
        }
    }
}

str = result.join('');
console.log(str || 'FRULA');