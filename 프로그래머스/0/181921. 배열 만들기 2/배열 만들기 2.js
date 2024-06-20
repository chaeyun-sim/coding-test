function solution(l, r) {
    const result = []
    
    for (let i = l; i <= r; i++) {
        const nums = [...new Set(String(i))].sort((a, b) => a - b).join('')
        if (nums === '05' || nums === '5') {
            result.push(i)
        }
    }
    
    return result.length === 0 ? [-1] : result
}