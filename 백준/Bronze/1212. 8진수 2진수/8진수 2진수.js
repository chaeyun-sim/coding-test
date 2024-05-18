const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let str = "";

for (let i = 0; i < input.length; i++) {
  let result = parseInt(input[i], 8).toString(2);
  
  if (i === 0) {
    str += result;
  } else {
    while (result.length < 3) {
      result = '0' + result;
    }
    str += result;
  }
}

console.log(str);
