function solution(n) {
    let str = ''
    let answer = 0
    
    while (n > 0) {
        str += (n % 3)
        n = Math.floor(n / 3)
    }
    
    const len = str.length
    
    for (let i = 0; i < len; i++) {
        answer += (str[i] * (3 ** (len - i - 1)))
    }
    
    return answer
}