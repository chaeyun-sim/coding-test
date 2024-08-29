function getOverlap(start1, end1, start2, end2) {
    const startOverlap = Math.max(start1, start2);
    const endOverlap = Math.min(end1, end2);
    
    if (startOverlap >= endOverlap) return []
    return new Array(endOverlap - startOverlap).fill(0).map((_, i) => startOverlap + i)
}

function solution(lines) {
    lines.sort((a, b) => a[0] - b[0])
    const arr = []
    
    for (let i = 0; i < lines.length; i++) {
        for (let j = i + 1; j < lines.length; j++) {
            arr.push(...getOverlap(...lines[i], ...lines[j]))
        }
    }

    return [...new Set(arr)].length;
}