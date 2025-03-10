function solution(n, left, right) {
    const arr = []
    
    for (let i = left; i <= right; i++) {
        arr.push(Math.max(Math.floor(i / n), i % n) + 1)
    }
    
    return arr
    
    // 2 -> 1-3 / 3  // 3
    // 3 -> 2-1 / 2  // 2
    // 4 -> 2-2 / 2  // 2
    // 5 -> 2-3 / 3  // 3
    
    // 1 -> 0 0
    // 2 -> 0 1, 1 1, 1 0
    // 3 -> 0 2, 1 2, 2 2, 2 1, 2 0
}