const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(Number)

arr.forEach(num => {
    const tmp = [1, 1]
    
    while (1) {
        const newNum = tmp[tmp.length - 1] + tmp[tmp.length - 2]
        if (newNum > num) break;
        tmp.push(newNum)
    }
    let target = num
    const result = []

    for (let i = tmp.length - 1; i >= 0; i--) {
        if (target >= tmp[i]) {
            target -= tmp[i]
            result.push(tmp[i])
        }
    }
    console.log(result.reverse().join(' '))
})