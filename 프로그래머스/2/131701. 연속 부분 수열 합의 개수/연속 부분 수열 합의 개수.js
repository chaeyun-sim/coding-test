function solution(elements) {
    const arr = [...elements, ...elements]
    const [n, m] = [elements.length, arr.length]
    const dp = new Array(m).fill(0)
    
    dp[0] = arr[0]
    
    for (let i = 1; i < m; i++) {
        dp[i] = dp[i - 1] + arr[i]  // 바로 다음
    }
    
    const set = new Set
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= 2 * n - i; j++) {
            const sum = dp[j + i - 1] - dp[j - 1];
            set.add(sum);
        }
    }
    
    return set.size - 1
}