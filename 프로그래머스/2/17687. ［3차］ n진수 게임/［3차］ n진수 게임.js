function solution(n, t, m, p) {
    let string = '';
    let result = '';
    let i = 0;
    
    while (string.length < t * m) {
        string += i.toString(n).toUpperCase();
        i++;
    }
    
    for (let i = p - 1; result.length < t; i += m) {
        result += string[i];
    }
    
    return result;
}
