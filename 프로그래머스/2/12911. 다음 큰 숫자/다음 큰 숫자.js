function solution(n) {
    const getBinary = x => x.toString(2)
    
    const len = getBinary(n).split('0').join('').length
    const max = 2 ** (getBinary(n).length + 1)
    
    for (let i = n + 1; i < max; i++) {
        const ones = getBinary(i).split('0').join('').length
        if (len === ones) return i
    }
}