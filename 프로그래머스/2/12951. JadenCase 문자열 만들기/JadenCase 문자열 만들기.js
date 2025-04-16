function solution(s) {
    const result = []
    
    for (let i = 0; i < s.length; i++) {
        if (i === 0 || s[i - 1] === ' ') {
            result.push(s[i].toUpperCase())
        } else {
            result.push(s[i].toLowerCase())
        }
    }
    
    return result.join('')
}