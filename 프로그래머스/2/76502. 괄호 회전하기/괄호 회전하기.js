function solution(s) {
    const str = s.concat(s)
    const obj = {
        '}' : '{',
        ']' : '[',
        ')' : '('
    }
    const map = new Map(Object.values(obj).map(el => [el, 0]))
    const arr = [...s]
    
    let end = s.length
    let count = 0
    
    while (end < str.length) {
        const stack = []
        let isValid = true;
        
        arr.shift()
        arr.push(str[end])
        
        for (const item of arr) {
            if (!obj[item]) {
                stack.push(item)
            } else {
                if (!stack.length || stack.at(-1) !== obj[item]) {
                    isValid = false;
                    break;
                }
                stack.pop()
            }
        }
        if (isValid && stack.length === 0) count++;
        
        end++
    }
    
    return count
}