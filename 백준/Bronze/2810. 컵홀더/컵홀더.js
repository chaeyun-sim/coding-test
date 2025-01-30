const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

const seats = input[1].replaceAll('LL', 'L').split('')
const seatsWithCup = seats.map((el, i) => '*' + el).join('').replaceAll('L', 'LL') + '*'

let cnt = 0;
const arr = [...seatsWithCup]

for (let i = 0; i < seatsWithCup.length; i++) {
    if (arr[i - 1] === '*') {
        arr[i - 1] = '#'
        cnt++
    } else if (arr[i + 1] === '*') {
        arr[i + 1] = '#'
        cnt++
    } else {
        continue;
    }
}

console.log(cnt)