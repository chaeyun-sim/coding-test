function solution(n) {
    const dx = [1, 0, -1, 0]
    const dy = [0, 1, 0, -1]
    const arr = new Array(n).fill([]).map(() => new Array(n).fill(0))
    let d = 0
    let x = 0
    let y = 0
    let num = 2
    arr[0][0] = 1
    
    while (num <= Math.pow(n, 2)) {
        let nx = x + dx[d]
        let ny = y + dy[d]
        const isValid = nx >= 0 && nx < n && ny >= 0 && ny < n && arr[ny][nx] === 0
        
        if (isValid) {
            arr[ny][nx] = num
            x = nx
            y = ny
            num++
        } else {
            d = (d + 1) % 4
        }
        
    }
    
    return arr
}