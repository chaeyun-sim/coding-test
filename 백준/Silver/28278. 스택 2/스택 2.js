const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(el => el.split(' ').map(Number))
let output = '';
const stack = []

for (const item of arr) {
    const type = item[0];

    if (type === 1) {
        stack.push(item[1]);
    } else if (type === 2) {
        output += (stack.length ? stack.pop() : -1)
    } else if (type === 3) {
        output += stack.length
    } else if (type === 4) {
        output += (!stack.length ? 1 : 0)
    } else if (type === 5) {
        output += (stack.length > 0 ? stack[stack.length - 1] : -1)
    }
    
    if (type > 1) output += '\n'
}

console.log(output.trim())