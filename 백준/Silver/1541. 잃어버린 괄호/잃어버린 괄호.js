const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

const arr = input[0].split('-')

const getSum = (item) => {
    const nums = item.split('+').map(Number)
    const sum = nums.reduce((a, b) => a + b)
    return sum
}

for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        if (i === 0) {
            if (item.includes('+')) {
                total = getSum(item)
            } else {
                total = Number(item)
            }
        } else {
            if (item.includes('+')) {
                total -= getSum(item)
            } else {
                total -= Number(item)
            }
        }
    }
    console.log(total)