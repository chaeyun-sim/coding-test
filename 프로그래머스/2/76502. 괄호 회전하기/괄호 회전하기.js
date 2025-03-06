function solution(s) {
    const str = s.concat(s)
    const obj = {
        '}' : '{',
        ']' : '[',
        ')' : '('
    }
    const map = new Map(Object.values(obj).map(el => [el, 0]))
    
    let start = 0
    let end = s.length
    let count = 0
    
    while (end < str.length) {
        const stack = []
        let isValid = true;
        
        for (const item of str.slice(start, end)) {
            if (Object.values(obj).includes(item)) {
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
        
        start++
        end++
    }
    
    return count
}