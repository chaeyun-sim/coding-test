function solution(progresses, speeds) {
    const LIMIT = 100
    const arr = []
    
    for (let i = 0; i < progresses.length; i++) {
        arr.push(Math.ceil((LIMIT - progresses[i]) / speeds[i]))
    }
    
    let cnt = 0
    const result = []
    let max = arr[0]
    
    for (const item of arr) {
        if (item > max) {
            result.push(cnt)
            cnt = 0
            max = item
        }
        cnt++
    }
    
    return [...result, cnt]
}