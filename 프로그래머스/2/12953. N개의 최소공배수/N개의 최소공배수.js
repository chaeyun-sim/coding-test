function solution(arr) {
    let n = 2
    while (n > 0) {
        if (arr.every(el => n % el === 0)) return n
        n++
    }
}