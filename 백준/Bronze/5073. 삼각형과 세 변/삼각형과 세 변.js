const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.map(el => el.split(' ').map(Number))

arr.forEach((item, index) => {
    if (index === arr.length - 1) return;
    
    const [a, b, c] = item;
    const sum = a + b + c
    const max = Math.max(a, b, c)

    if (sum) {
        const isTriangle = (sum - max) > max
        if (!isTriangle) {
            console.log('Invalid');
        } else {
            if (a === b && b === c) {
                console.log('Equilateral');
            } else if (a === b || b === c || a === c) {
                console.log('Isosceles');
            } else {
                console.log('Scalene');
            }
        }
    }
})