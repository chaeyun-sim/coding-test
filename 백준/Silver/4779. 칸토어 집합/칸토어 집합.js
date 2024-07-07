const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function cantorSet(n) {
    if (n === 0) return '-';
    const prev = cantorSet(n - 1);
    const space = ' '.repeat(prev.length);
    return prev + space + prev;
}

const result = []
input.map(Number).forEach(num => {
    result.push(cantorSet(num))
});


result.forEach(item => console.log(item))