function gcd(w, h) {
    while (h !== 0) {
        [w, h] = [h, w % h]
    }
    return w;
}


function solution(w, h) {
    return (w * h) - (w + h - gcd(w, h))
}