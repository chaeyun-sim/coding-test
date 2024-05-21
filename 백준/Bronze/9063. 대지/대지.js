const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.slice(1).map(el => el.split(' ').map(Number))
const Xs = arr.map(el => el[0])
const Ys = arr.map(el => el[1])
const resultX = Math.max(...Xs) - Math.min(...Xs)
const resultY = Math.max(...Ys) - Math.min(...Ys)
console.log(resultX * resultY)