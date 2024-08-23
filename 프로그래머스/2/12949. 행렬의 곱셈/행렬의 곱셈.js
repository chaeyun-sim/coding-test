function solution(arr1, arr2) {
    const len1 = arr1.length
    const len2 = arr2[0].length
    const result = new Array(len1).fill([]).map(() => new Array(len2).fill(0))
    
    for (let i = 0; i < len1; i++) {
        for (let k = 0; k < arr2.length; k++) {
            for (let j = 0; j < len2; j++) {
                result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }

    return result;
}
