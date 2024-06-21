const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.slice(1)
const indexes = []

arr.forEach((name, i) => {
    if (name === 'ENTER'){
        indexes.push(i)
    }
})
indexes.push(arr.length)

let cnt = 0

for (let i = 1; i < indexes.length; i++) {
    const newArr = new Set(arr.slice(indexes[i - 1] + 1, indexes[i]))
    cnt += newArr.size
}

console.log(cnt)