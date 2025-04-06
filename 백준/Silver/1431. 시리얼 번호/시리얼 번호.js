const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input.slice(1).map(el => el.split(''));

arr.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  } else {
    const sumA = a.filter(el => !isNaN(el)).reduce((a, b) => Number(a) + Number(b), 0);
    const sumB = b.filter(el => !isNaN(el)).reduce((a, b) => Number(a) + Number(b), 0);
    if (sumA !== sumB) {
      return sumA - sumB;
    }
  }
  return a.join('').localeCompare(b.join(''));
});

arr.forEach(str => console.log(str.join('')));