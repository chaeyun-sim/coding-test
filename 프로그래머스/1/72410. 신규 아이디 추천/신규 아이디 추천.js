function solution(new_id) {
    let str = new_id.toLowerCase()
    
    str = str.replaceAll(/[^a-z0-9\-_.]/g, '');
    
    str = str.replaceAll(/\.{2,}/g, '.');
    
    str = str.replace(/^\.|\.$/g, '');
    
    if (str.length === 0) str = 'a'
    
    if (str.length >= 16) {
        str = str.slice(0, 15)
        if (str[str.length - 1] === '.') {
            str = str.slice(0, 14)
        }
    }
    
    if (str.length <= 2) {
        const last = str[str.length - 1]
        for (let i = 0; i <= (3 - str.length); i++) {
            str += last
        }
    }
    
    return str
}