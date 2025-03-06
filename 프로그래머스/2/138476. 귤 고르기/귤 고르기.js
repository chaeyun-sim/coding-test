function solution(k, tangerine) {
    const map = new Map()
    
    tangerine.map(el => map.set(el, (map.get(el) || 0) + 1))
    
    const arr = [...map.entries()].sort((a, b) => b[1] - a[1]);
    
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        k -= arr[i][1]
        result++
        if (k <= 0) break;
    }
    
    return result
}