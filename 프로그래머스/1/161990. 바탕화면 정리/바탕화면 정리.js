function solution(wallpaper) {
    const n = wallpaper.length;
    const m = wallpaper[0].length
    const xs = []
    const ys = []
    
    wallpaper.join('').split('').forEach((position, i) => {
        if (position === '#') {
            const [x, y] = [Math.floor(i / m), i % m]
            xs.push(x)
            ys.push(y)
        }
    })
    
    const lux = Math.min(...xs)
    const luy = Math.min(...ys)
    const rdx = Math.max(...xs)
    const rdy = Math.max(...ys)
    
    return [lux, luy, rdx + 1, rdy + 1]
}