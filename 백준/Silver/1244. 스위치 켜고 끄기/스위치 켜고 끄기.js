const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input[1].split(' ').map(Number)
const testCases = input.slice(3).map(el => el.split(' ').map(Number))

testCases.forEach(item => {
    const [gender, current] = item;
    
    if (gender === 1) {
        for (let i = current - 1; i < n; i += current) {
            arr[i] = arr[i] === 0 ? 1 : 0
        }
    } else if (gender === 2) {
        const index = current - 1;
        let left = index;
        let right = index;
        
        while (left > 0 && right < n - 1 && arr[left - 1] === arr[right + 1]) {
            left--;
            right++;
        }
        
        for (let i = left; i <= right; i++) {
            arr[i] = arr[i] === 0 ? 1 : 0;
        }
    }
})

for (let i = 0; i < n; i += 20) {
    console.log(arr.slice(i, i + 20).join(' '));
}