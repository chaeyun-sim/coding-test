const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
let [target, str] = input;

while (target !== str) {
    if (str.length === target.length && str !== target) {
        console.log(0)
        break;
    }
    
    if (str[str.length - 1] === 'A') {
        str = str.slice(0, -1)
    } else if (str[str.length - 1] === 'B') {
        str = str.slice(0, -1)
        str = [...str].reverse().join().replaceAll(',', '')
    }
}

if (target === str) console.log(1)