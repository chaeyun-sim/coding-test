const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const target = input[1];

const [prefix, suffix] = target.split('*');

for (let i = 2; i < 2 + n; i++) {
  const str = input[i];

  if (str.length < target.length - 1) {
    console.log('NE');
  } else if (str.startsWith(prefix) && str.endsWith(suffix)) {
    console.log('DA');
  } else {
    console.log('NE');
  }
}