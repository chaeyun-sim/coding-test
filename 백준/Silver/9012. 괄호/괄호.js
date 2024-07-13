const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.slice(1).forEach(str => {
    while (str.length > 1) {
        if (!str.includes('()')) break;
        str = str.replace('()', '')
    }
    console.log(str.length === 0 ? 'YES' : 'NO')
})