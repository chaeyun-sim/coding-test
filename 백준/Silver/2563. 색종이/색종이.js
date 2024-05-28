const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0]);
const testCases = input.slice(1).map(el => el.split(' ').map(Number));

const paper = Array.from({ length: 100 }, () => Array(100).fill(0));

testCases.forEach(([x, y]) => {
    for (let i = x; i < x + 10; i++) {
        for (let j = y; j < y + 10; j++) {
            paper[i][j] = 1;
        }
    }
});

const total = paper.map(el => el.filter(v => v).length)
console.log(total.reduce((a, b) => a + b))