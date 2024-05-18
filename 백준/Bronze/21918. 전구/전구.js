const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(" ").map(Number)
const arr = input[1].split(' ').map(Number)
const testCases = input.slice(2).map(el => el.split(' ').map(Number))

testCases.forEach(item => {
    const [num, bulb, changeTo] = item;
    
    if (num === 1) {
        arr[bulb - 1] = changeTo;
    } else {
        for (let i = bulb - 1; i < changeTo; i++) {
            if (num === 2) {
                arr[i] = arr[i] === 1 ? 0 : 1
            } else if (num === 3) {
                arr[i] = 0
            } else if (num === 4) {
                arr[i] = 1
            }
        }
    }
})

console.log(arr.join(' '))