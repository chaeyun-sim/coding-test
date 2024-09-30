function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    const arr = n.toString(k).split('0');
    let cnt = 0;
    
    arr.forEach(numStr => {
        if (numStr === '') return;
        const num = parseInt(numStr, 10);
        if (isPrime(num)) cnt++
    });
    
    return cnt;
}
