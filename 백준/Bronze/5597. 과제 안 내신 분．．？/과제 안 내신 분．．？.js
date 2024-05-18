const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.map(Number)
const map = new Map()

for (let i = 0; i < arr.length; i++) {
  map.set(arr[i], 1);
}

for (let i = 1; i <= 30; i++) {
  if (!map.has(i)) {
    console.log(i);
  }
}