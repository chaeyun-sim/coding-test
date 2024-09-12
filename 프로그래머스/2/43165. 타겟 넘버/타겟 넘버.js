function solution(numbers, target) {
    const op = ['-', '+']
    const selected = []
    let cnt = 0
    
    function dfs(depth) {
        if (depth === numbers.length) {
            let sum = 0
            for (let i = 0; i < numbers.length; i++) {
                let num = numbers[i]
                if (selected[i] === '-') num = num * -1
                sum += num
            }
            if (sum === target) cnt++
            return;
        }
        
        for (let i = 0; i < op.length; i++) {
            selected.push(op[i])
            dfs(depth + 1)
            selected.pop()
        }
    }
    
    dfs(0)
    return cnt;
}