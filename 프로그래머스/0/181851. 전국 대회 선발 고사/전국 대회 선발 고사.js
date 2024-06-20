function solution(rank, attendance) {
    rank = rank.map((el, i) => [i, el]).filter((_, i) => attendance[i]).sort((a, b) => a[1] - b[1])
    const [a, b, c] = rank.slice(0, 3).map(el => el[0])
    return (10000 * a) + (100 * b) + c
}