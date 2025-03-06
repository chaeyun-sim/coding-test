function solution(elements) {
    const arr = [...elements, ...elements]
    const [n, m] = [elements.length, arr.length]
    const set = new Set()
    
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const sum = arr.slice(j, j + i).reduce((a, b) => a + b)
            set.add(sum)
        }
    }
    
    return set.size + 1
}