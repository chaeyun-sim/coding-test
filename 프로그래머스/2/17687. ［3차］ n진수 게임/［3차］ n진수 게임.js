function solution(n, t, m, p) {
    let str = ''
    let number = 0

    while (str.length < t * m) {
        str += number.toString(n).toUpperCase()
        number++
    }
    
    let result = ''
    for (let i = 0; result.length < t; i++) {
        if (i % m === p - 1) {
            result += str[i]
        }
    }
    return result
}
