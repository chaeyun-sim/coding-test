function solution(n, m) {
    let gcd = 1;
    let lcm = 0;
    
    for (let i = 2; i <= m; i++) {
        if (n % i === 0 && m % i === 0) {
            gcd = i
        }
    }
    
    for (let j = m; j > 0; j++) {
        if (j % n === 0 && j % m === 0) {
            lcm = j
            return [gcd, lcm]
        }
    }
}