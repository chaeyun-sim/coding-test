function solution(a, b, c, d) {
    const dice = [a, b, c, d]
    const map = new Map()
    dice.forEach(num => map.set(num, (map.get(num) || 0) + 1))
    
    const arr = [...map.entries()]
    arr.sort((a, b) => b[1] - a[1] || b[0] - a[0])
    
    const [val1, val2, val3, val4] = arr;
    
    if (arr.length === 1) {
        return 1111 * val1[0]
    } else if (arr.length === 2 && val1[1] === 3) {
        return Math.pow((10 * val1[0]) + val2[0], 2)
    } else if (arr.length === 2 && val1[1] === 2) {
        return (val1[0] + val2[0]) * Math.abs(val1[0] - val2[0])
    } else if (arr.length === 3) {
        return val2[0] * val3[0]
    } else {
        return val4[0]
    }
}