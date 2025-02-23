const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let startFlag = false;
let result = [];
let tmp = '';

for (let i = 0; i < input[0].length; i++) {
  const item = input[0][i];
  if (item === ' ') {
    result.push(tmp);
    result.push(item);
    tmp = '';
    continue;
  } else if (item === '<') {
    result.push(tmp + '<');
    startFlag = true;
    tmp = '';
    continue;
  } else if (item === '>') {
    result.push(item);
    startFlag = false;
    continue;
  }

  if (startFlag) {
    result.push(item);
  } else {
    tmp = item + tmp;
  }
}

result.push(tmp);

console.log(result.join(''));