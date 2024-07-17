const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

const n = Number(input[0])
const arr = input[1].split(' ').map(Number)

const stack = []
let current = 1
let list = arr

function checkStack() {
    while (stack && stack[stack.length - 1] === current) {
        stack.pop();
        current++;
    }
}

for (let i = 0; i < n; i++) {
    checkStack()
    if (list[i] === current) {
        current++;
    } else {
        stack.push(list[i]);
    }
}
checkStack()


console.log(current - 1 === n ? 'Nice' : 'Sad')