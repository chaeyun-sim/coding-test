function solution(n) {
    if (n === 1 || n === 2) return 1
    
    let cnt = n % 2 ? 2 : 1
    for (let i = 3; i < n; i += 2) {
        if (n % i === 0) cnt++        
    }
    
    return cnt
}