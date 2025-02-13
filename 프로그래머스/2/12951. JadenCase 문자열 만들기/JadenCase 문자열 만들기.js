function solution(s) {
    const arr = s.split(" ")
    const result = []
    
    arr.forEach(str => {
        if (str === '') result.push(str)
        else {
            result.push(str[0].toUpperCase() + str.slice(1).toLowerCase())
        }
    })
    
    return result.join(' ')
}