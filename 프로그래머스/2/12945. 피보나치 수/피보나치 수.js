function solution(n) {
    const dp = Array.from({ length: n + 1 }, () => 0)

    dp[1] = 1
    dp[2] = 1
    
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567
    }
    
    return dp[n]
}