const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input.slice(1).map(el => el.split(' '))
const result = ['ChongChong']

arr.forEach(item => {
    const [name1, name2] = item;
    
    if (result.includes(name1) && !result.includes(name2)) {
        result.push(name2)
    } else if (result.includes(name2) && !result.includes(name1)) {
        result.push(name1)
    }
})

console.log(result.length)