const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let str = input[0];
const commands = input.slice(2);
let cursor = str.split('');
let rightStack = [];

commands.forEach(command => {
    const [cmd, char] = command.split(' ');

    if (cmd === 'P') {
        cursor.push(char);
    } else if (cmd === 'L' && cursor.length > 0) {
        rightStack.push(cursor.pop());
    } else if (cmd === 'D' && rightStack.length > 0) {
        cursor.push(rightStack.pop());
    } else if (cmd === 'B' && cursor.length > 0) {
        cursor.pop();
    }
});
console.log(cursor.join('') + rightStack.reverse().join(''));