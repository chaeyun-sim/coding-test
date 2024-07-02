const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [typeAndA, ...rest] = input[0].slice(0, -1).split(', ')
let [type, a] = typeAndA.split(' ')
let arr = [a, ...rest]
arr = arr.map(item => item.replaceAll('[]', '^'))

function reverse(str) {
    const alphabets = str.replace(/[^a-zA-Z]/g, '')
    let result = ''
    for (let i = str.length - 1; i > alphabets.length - 1; i--) {
        if (str[i] === '^') {
            result += '[]'
        } else {
            result += str[i]
        }
    }
    
    return `${result} ${alphabets}`
}

arr.forEach(item => {
    console.log(`${type}${reverse(item)};`)
})