function solution(arr1, arr2) {
    const h = arr1.length;
    const w = arr2[0].length;
    const mid = arr2.length;
    
    const result = Array.from({ length: h }, () => Array(w).fill(0));
    
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            let sum = 0;
            for (let k = 0; k < mid; k++) {
                sum += arr1[i][k] * arr2[k][j];
            }
            result[i][j] = sum;
        }
    }
    
    return result;
}