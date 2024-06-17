const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.slice(1).map((el) => el.split(" "));
const map = new Map();

arr.map(([name, e]) => map.set(name, e));
let result = [];

for (let key of map.keys()) {
  if (map.get(key) !== "leave") result.push(key);
}

result.sort().reverse();

console.log(result.join("\n"));