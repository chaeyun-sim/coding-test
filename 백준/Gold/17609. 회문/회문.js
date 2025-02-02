const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

const T = Number(input[0])
const arr = input.slice(1)

function checkPalindrome(str, left, right) {
    while (left < right) {
        if (str[left] !== str[right]) return false
        left++
        right--
    }
    return true
}

arr.forEach(str => {
    let left = 0
    let right = str.length - 1

    while (left < right) {
        if (str[left] !== str[right]) {
            const check1 = checkPalindrome(str, left + 1, right)
            const check2 = checkPalindrome(str, left, right - 1)

            if (check1 || check2) {
                console.log(1)
            } else {
                console.log(2)
            }
            return
        }
        left++
        right--
    }
    
    console.log(0)
})