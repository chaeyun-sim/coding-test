function solution(dots) {
    function getSlope(point1, point2) {
        return (point2[1] - point1[1]) / (point2[0] - point1[0]);
    }

    const slopes = [
        getSlope(dots[0], dots[1]),
        getSlope(dots[0], dots[2]),
        getSlope(dots[0], dots[3]),
        getSlope(dots[1], dots[2]),
        getSlope(dots[1], dots[3]),
        getSlope(dots[2], dots[3])
    ];

    return +(slopes[0] === slopes[5] || slopes[1] === slopes[4] || slopes[2] === slopes[3])
}
