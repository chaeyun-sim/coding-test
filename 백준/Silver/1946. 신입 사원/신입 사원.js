const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

const T = Number(input[0])
let index = 1

for (let i = 0; i < T; i++) {
    const N = Number(input[index])
    const arr = []
    for (let j = 1; j <= N ; j++) {
        arr.push(input[j + index].split(' ').map(Number))
    }
    
    arr.sort((a, b) => a[0] - b[0])
    

    let min = arr[0][1]
    let cnt = 1;

    for (let i = 1; i < N; i++) {
        if (min > arr[i][1]) {
            min = arr[i][1]
            cnt++
        }
    }
    
    console.log(cnt)

    index += (N + 1)
}