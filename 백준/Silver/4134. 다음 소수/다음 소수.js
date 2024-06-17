const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.slice(1).map(Number)

function checkNextPrime(num) {
    if (num === 2) return true
    if (num === 1 || num % 2 === 0) return false
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false
        }
    }
    
    return true
}

arr.forEach(num => {
    for (let i = num; i >= 0; i++) {
        if (checkNextPrime(i)) {
            console.log(i)
            return
        }
    }
})