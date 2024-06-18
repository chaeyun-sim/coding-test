const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [x, y] = input[0].split(' ').map(Number)
const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

let year = 2007

if (x === 1) {
    year--
    x = 12
} else {
    x--
}

const day = new Date(year, x, y).getDay()
console.log(week[day])