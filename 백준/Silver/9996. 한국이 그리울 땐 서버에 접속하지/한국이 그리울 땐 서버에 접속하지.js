const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const target = input[1];

const [prefix, suffix] = target.split('*');
const regex = new RegExp(`^${prefix}.*${suffix}$`);

for (let i = 2; i < 2 + n; i++) {
  console.log(regex.test(input[i]) ? 'DA' : 'NE')
}
