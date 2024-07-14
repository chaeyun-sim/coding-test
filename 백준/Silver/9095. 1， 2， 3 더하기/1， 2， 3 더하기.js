const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const testCases = input.slice(1).map(Number);
const max = Math.max(...testCases);

const arr = []

arr[0] = 1;
arr[1] = 1;
arr[2] = 2;
arr[3] = 4;

for (let i = 4; i <= max; i++) {
    const sum = arr.slice(arr.length - 3).reduce((a, b) => a + b)
    arr[i] = sum
}

testCases.forEach(num => {
    console.log(arr[num]);
});
