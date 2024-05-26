const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const str = input[0]
const map = new Map()

new Array(10).fill(0).map((_, i) => i).forEach(num => map.set(num + '', 0))

for (let i = 0; i < str.length; i++) {
    map.set(str[i], (map.get(str[i]) || 0) + 1)
}

const sixes = map.get('6')
const nines = map.get('9')
const val = Math.ceil((sixes + nines) / 2);

map.set('6', val);
map.set('9', val);

const max = Math.max(...Array.from(map.values()));

console.log(max);