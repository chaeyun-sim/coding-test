function checkEqual(origin, result) {
    const a = Array.from(origin).sort((a, b) => a[0].localeCompare(b[0]))
    const b = Array.from(result).sort((a, b) => a[0].localeCompare(b[0]))
    
    for (let i = 0; i < a.length; i++) {
        if (a[i][0] !== b[i][0] || a[i][1] !== b[i][1]) {
            return false
        }
    }
    return true
}

function solution(want, number, discount) {
    const map = new Map(want.map((el, i) => [el, number[i]]))
    let cnt = 0
    
    for (let i = 0; i < discount.length; i++) {
        const resultMap = new Map()
        const arr = discount.slice(i, i + 10)
        if (arr.length === 10) {
            arr.forEach(item => resultMap.set(item, (resultMap.get(item) || 0) + 1))
            if (checkEqual(map, resultMap)) cnt++
        }
    }
    return cnt   
}
    