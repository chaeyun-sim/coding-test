const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.forEach(str => {
    const num = Number(str);
    let remainder = 0;

    for (let length = 1; ; length++) {
        remainder = (remainder * 10 + 1) % num;
        if (remainder === 0) {
            console.log(length);
            break;
        }
    }
});