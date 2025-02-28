function solution(n) {
    let teleport = 0
    while (n > 0) {
        if (n % 2) {
            n--
            teleport++
        }
        
        n /= 2
    }
    return teleport
}

// *2 또는 -1