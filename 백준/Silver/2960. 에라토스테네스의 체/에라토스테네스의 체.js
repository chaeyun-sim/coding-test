const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, k] = input[0].split(' ').map(Number)
let arr = new Array(n - 1).fill(0).map((_, i) => i + 2)
let stack = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        let p = arr[i];
        for (let j = i; j < arr.length; j += p) {
            if (arr[j] !== 0) {
                stack.push(arr[j]);
                arr[j] = 0;
            }
        }
    }
}

console.log(stack[k - 1]);