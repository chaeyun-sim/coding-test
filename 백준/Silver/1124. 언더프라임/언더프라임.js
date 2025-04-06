const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

function calculate(num) {
  let result = [];
  let divisor = 2;

  while (num >= 2) {
    if (num % divisor === 0) {
      result.push(divisor);
      num /= divisor;
    } else {
      divisor++;
    }
  }

  return result;
}

function isPrime(num) {
  if (num === 2) return true;
  if (num < 2 || num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

let cnt = 0;

for (let i = n; i <= m; i++) {
  const len = calculate(i).length;
  if (isPrime(len)) cnt++;
}

console.log(cnt);