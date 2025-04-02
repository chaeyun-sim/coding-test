function solution(n) {
    let cnt = 0
    while (n > 0) {
        if (n % 2 === 0) {
            n /= 2
            continue;
        }
        
        n--
        cnt++
    }
    return cnt
}