const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, yourCard, m, myCard] = input;
yourCard = yourCard.split(' ').map(Number)
myCard = myCard.split(' ').map(Number)

const yourCardSet = new Set(yourCard);

const results = myCard.map(card => yourCardSet.has(card) ? 1 : 0);

console.log(results.join(' '));