const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [k, l] = input[0].split(' ').map(Number)
let applied = input.slice(1)
const students = new Map();

for (let i = 0; i < l; i++) {
  const student = applied[i];
  if (students.has(student)) {
    students.delete(student);
  }
  students.set(student, true);
}

const result = [...students.keys()].slice(0, k);
console.log(result.join('\n'));