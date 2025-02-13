function solution(s){
    const stack = []
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') stack.push('(')
        else {
            if (!stack.length) return false
            stack.pop()
        }
    }
    return !stack.length
}