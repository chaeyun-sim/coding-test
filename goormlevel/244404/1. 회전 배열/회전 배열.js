const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);
let current = 0;

if (arr.length > 1) {
    while (m > 0) {
        let move = arr[current];
				current = (current + move) % n;
				if (current < 0) current += n;
				if (current >= n) current -= n;
				
        m--;
    }
}
console.log(arr[current]);