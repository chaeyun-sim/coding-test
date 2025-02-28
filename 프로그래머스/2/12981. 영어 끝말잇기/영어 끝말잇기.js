function solution(n, words) {
    const set = new Set()
    set.add(words[0])
    
    for (let i = 1; i < words.length; i++) {
        const [prev, curr] = [words[i - 1], words[i]]
        
        if (prev[prev.length - 1] !== curr[0] || set.has(curr)) {
            return [i % n + 1, Math.floor(i / n) + 1]
        }
        
        set.add(curr)
    }
    
    return [0, 0]
}