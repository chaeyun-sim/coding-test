function solution(brown, yellow) {
    const total = brown + yellow
    
    for (let i = 3; i <= Math.sqrt(total); i++) {
        if (total % i === 0) {
            const [w, h] = [total / i, i]
            
            if ((w - 2) * (h - 2) === yellow) {
                return [w, h]
            }
        }
    }
}