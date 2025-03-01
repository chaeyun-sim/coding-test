function solution(arr) {
    arr.sort((a, b) => b - a)
    
    let n = arr[0]
    while (n > 0) {
        if (arr.every(el => n % el === 0)) return n
        n++
    }
}