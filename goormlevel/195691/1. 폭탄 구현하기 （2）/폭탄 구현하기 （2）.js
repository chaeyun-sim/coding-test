const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function (line) {
    input.push(line.trim());
}).on('close', function () {
    const [n, k] = input[0].split(' ').map(Number);
    const arr = input.slice(1, n + 1).map(el => el.split(' '));
    const map = Array.from({ length: n }, () => Array(n).fill(0));
    const testCases = input.slice(n + 1);
    const dx = [0, 0, 1, 0, -1];
    const dy = [0, 1, 0, -1, 0];

    testCases.forEach(item => {
        let [y, x] = item.split(" ").map(Number);
        x--;
        y--;
        
        for (let i = 0; i < 5; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            const isValid = ny >= 0 && ny < n && nx >= 0 && nx < n;
            
            if (isValid) {
                let value = arr[ny][nx];
                if (value === '#') continue;
                if (value === '@') {
                    map[ny][nx] += 2;
                } else if (!isNaN(Number(value))) {
                    map[ny][nx]++;
                }
            }
        }
    });

    let max = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            max = Math.max(max, map[i][j]);
        }
    }

    console.log(max);
    process.exit(0);
});
