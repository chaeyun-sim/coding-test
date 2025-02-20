function solution(n) {
    // x + x - 1 => 2x - 1
    // x - 1 + x + x + 1 => 3x
    // x - 2 + x - 1 + x + x + 1 + x + 2 => 5x
    
    if (n === 1 || n === 2) return 1
    
    let cnt = (n + 1) % 2 === 0 ? 2 : 1
    for (let i = 3; i < n; i += 2) {
        if (n % i === 0) cnt++        
    }
    console.log(cnt)
    
    return cnt
}