const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(el => el.split(' ').slice(1));
arr.sort((a, b) => a[0].localeCompare(b[0]) || a[1].length - b[1].length); 

const obj = {};

arr.forEach(path => {
  let current = obj;
  path.forEach(room => {
    if (!current[room]) {
      current[room] = {};
    }
    current = current[room];
  });
});

function printCave(cave, depth = 0) {
  const keys = Object.keys(cave).sort()
  keys.forEach(key => {
    console.log(`${'--'.repeat(depth)}${key}`);
    printCave(cave[key], depth + 1);
  });
}

printCave(obj)