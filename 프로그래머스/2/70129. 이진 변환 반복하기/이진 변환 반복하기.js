function solution(s) {
    let cnt = 0
    let zeros = 0
    
    while (s !== '1') {
        let x = '';
        
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '0') zeros++;
            else x += '1';
        }
        
        cnt++;

        s = x.length.toString(2);
    }   
    return [cnt, zeros]
}