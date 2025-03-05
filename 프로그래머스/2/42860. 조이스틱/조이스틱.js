function solution(name) {
    const len = name.length
    let move = len - 1
    const arr = new Array(name.length).fill(0)
    
    let count = 0
    
    for (let i = 0; i < len; i++) {
        let num = name.charCodeAt(i);
        count += Math.min(num - 65, 26 - (num - 65));
        
        let next = i + 1;
        while (next < len && name[next] === 'A') next++
        
        move = Math.min(move, i * 2 + (len - next), (len - next) * 2 + i)
    }
    
    return count + move;
}