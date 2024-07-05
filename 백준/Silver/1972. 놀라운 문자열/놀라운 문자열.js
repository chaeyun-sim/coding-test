const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

input.forEach((str, idx) => {
    if (str === '*') return;
    const arr = []
    let flag = true
    
    for (let i = 0; i <= str.length - 2; i++) {
        const tmp = new Set()
        for (let j = 0; j < str.length - i - 1; j++) {
            const pair = str[j] + str[j + i + 1]
            
            if (tmp.has(pair)) {
                flag = false;
                break;
            }
            tmp.add(pair)
        }
        if (!flag) break;
    }
    
    const keyword = !flag ? 'NOT surprising.' : 'surprising.'
    console.log(`${str} is ${keyword}`)
})