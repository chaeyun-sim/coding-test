const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(el => el.split(' '))
const queue = []
const output = []
let front = 0

for (const item of arr) {
    const type = item[0]
    const length = queue.length - front
    
    if (type === 'push') {
        queue.push(Number(item[1]))
    } else if (type === 'pop') {
        if (length) {
            output.push(queue[front])
            front++
        } else {
            output.push(-1)
        }
    } else if (type === 'size') {
        output.push(length)
    } else if (type === 'empty') {
        output.push(length ? 0 : 1)
    } else if (type === 'front') {
        output.push(length ? queue[front] : -1)
    } else if (type === 'back') {
        output.push(length ? queue[queue.length - 1] : -1)
    }
}

console.log(output.join('\n'))