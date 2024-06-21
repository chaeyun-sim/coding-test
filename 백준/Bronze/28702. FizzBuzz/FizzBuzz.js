const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

function getNumber(num) {
    if (num % 15 === 0) {
        return 'FizzBuzz'
    } else if (num % 3 === 0) {
        return 'Fizz'
    } else if (num % 5 === 0) {
        return 'Buzz'
    } else {
        return String(num)
    }
}

for (let i = input.length - 1; i >= 0; i--) {
    const n = Number(input[i]) + (input.length - i)
    if (!isNaN(n)) {
        console.log(getNumber(n))
        return;
    }
}