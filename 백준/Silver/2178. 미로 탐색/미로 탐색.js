const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [n, m] = input[0].split(' ').map(Number)
const arr = input.slice(1).map(el => el.split('').map(Number))

const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]

const bfs = (startX, startY) => {
    const queue = []
    queue.push([startX, startY])
    
    const visited = new Array(n).fill([]).map(() => new Array(m).fill(false))
    visited[startX][startY] = true

    while (queue.length > 0) {
        const [x, y] = queue.shift()

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i]
            const ny = y + dy[i]
            const isValid = nx >= 0 && nx < n && ny >= 0 && ny < m && arr[nx][ny] === 1

            if (isValid && !visited[nx][ny]) {
                visited[nx][ny] = true
                arr[nx][ny] = arr[x][y] + 1
                queue.push([nx, ny])
            }
        }
    }
}

bfs(0, 0)
console.log(arr[n - 1][m - 1])
