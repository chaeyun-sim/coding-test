const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, k] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)

let cnt = 0;
let result = -1;

function merge(arr, p, q, r) {
    let i = p;
    let j = q + 1;
    let t = 0;
    let tmp = new Array(r - p + 1);

    while (i <= q && j <= r) {
        if (arr[i] <= arr[j]) {
            tmp[t++] = arr[i++];
        } else {
            tmp[t++] = arr[j++];
        }
    }
    while (i <= q) {
        tmp[t++] = arr[i++];
    }
    while (j <= r) {
        tmp[t++] = arr[j++];
    }
    for (let l = 0; l < tmp.length; l++) {
        arr[p + l] = tmp[l];
        cnt++;
        if (cnt === k) {
            result = tmp[l];
            return;
        }
    }
}

function mergeSort(arr, p, r) {
    if (p < r) {
        let q = Math.floor((p + r) / 2);
        mergeSort(arr, p, q);
        mergeSort(arr, q + 1, r);
        merge(arr, p, q, r);
    }
}

mergeSort(arr, 0, arr.length - 1);

console.log(result);
