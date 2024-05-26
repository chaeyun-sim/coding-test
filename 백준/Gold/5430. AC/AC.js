const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')


const n = Number(input[0]);
const arr = input.slice(1);
const testCases = [];

for (let i = 0; i < n; i++) {
    testCases.push(arr.slice(i * 3, (i + 1) * 3));
}

function solution(command, list) {
    let flag = false;
    let front = 0;
    let back = list.length;

    for (let i = 0; i < command.length; i++) {
        if (command[i] === 'R') {
            flag = !flag;
        } else if (command[i] === 'D') {
            if (front < back) {
                flag ? back-- : front++;
            } else {
                return 'error';
            }
        }
    }

    const result = list.slice(front, back);
    if (flag) result.reverse()
    return `[${result.join(',')}]`;
}

testCases.forEach(item => {
    let [command, _, list] = item;
    list = list.slice(1, list.length - 1).split(',').filter(el => el !== '')
    
    console.log(solution(command, list))
});
