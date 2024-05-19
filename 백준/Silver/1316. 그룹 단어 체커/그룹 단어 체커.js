const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1)
let cnt = 0

arr.forEach(str => {
    const stack = []
    
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i])
        
        if (stack[stack.length - 1] === stack[stack.length - 2]) {
            stack.pop()
        }
    }
    
    if ([...new Set(stack)].join('') === stack.join('')) {
        cnt++
    }
})

console.log(cnt)