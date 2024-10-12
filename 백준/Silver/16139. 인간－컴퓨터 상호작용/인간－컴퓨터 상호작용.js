const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const str = input[0];
const arr = input.slice(2).map(el => el.split(' '));

function getSum(target, n, m) {
    let cnt = 0;

    for (let i = n; i <= m; i++) {
        if (str[i] === target) cnt++;
    }

    console.log(cnt);
}

arr.forEach(item => {
    const [target, a, b] = item;
    getSum(target, parseInt(a), parseInt(b));
});
