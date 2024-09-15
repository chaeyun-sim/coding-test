const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const opCount = input[2].split(' ').map(Number);
const operations = ['+', '-', '*', '/'];
let min = Infinity;
let max = -Infinity;

function dfs(depth, currentValue) {
    if (depth === n - 1) {
        min = Math.min(min, currentValue);
        max = Math.max(max, currentValue);
        return;
    }

    for (let i = 0; i < 4; i++) {
        if (opCount[i] > 0) {
            opCount[i]--;

            let nextValue;
            if (operations[i] === '+') nextValue = currentValue + arr[depth + 1];
            else if (operations[i] === '-') nextValue = currentValue - arr[depth + 1];
            else if (operations[i] === '*') nextValue = currentValue * arr[depth + 1];
            else nextValue = Math.trunc(currentValue / arr[depth + 1]);

            dfs(depth + 1, nextValue);

            opCount[i]++;
        }
    }
}

dfs(0, arr[0]);

console.log(`${max}\n${min}`);