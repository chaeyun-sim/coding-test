function solution(citations) {
    citations.sort((a, b) => b - a);
    let h = 0;
    
    for (let i = 0; i < citations.length; i++) {
        let curr = i + 1
        if (citations[i] < curr) break;
        h = curr
    }
    
    return h;
}
