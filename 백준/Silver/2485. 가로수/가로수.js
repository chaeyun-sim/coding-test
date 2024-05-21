const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0]);
const arr = input.slice(1).map(Number);
const gcdArr = [];

// 나무들 사이에 간격 구하기
for (let i = 1; i < n; i++) {
    gcdArr.push(arr[i] - arr[i - 1]);
}

const gcd = (a, b) => {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
};

// 나무들 사이의 간격 중 최소 간격 구하기
let min = gcdArr[0];
for (let i = 1; i < gcdArr.length; i++) {
    min = gcd(min, gcdArr[i]);
}

// 필요한 간격 구하기
const total = (arr[n - 1] - arr[0]) / min;

// 총 개수
console.log(Math.floor(total - n + 1));