function solution(s) {
    const stack = [s[0]];
    
    for (let i = 1; i < s.length; i++) {
        const item = s[i]
        stack.push(item);
        
        if (stack.length > 0 && stack[stack.length - 1] === stack[stack.length - 2]) {
            stack.pop();
            stack.pop();
        }
    }
    
    return +!stack.length;
}