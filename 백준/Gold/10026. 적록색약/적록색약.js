const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

const isValid = (nx, ny) => nx >= 0 && nx < n && ny >= 0 && ny < n;

const dx = [0, 1, 0, -1]; // 북동남서
const dy = [-1, 0, 1, 0];

function dfs(x, y, color, arr, visited) {
	if (!isValid(x, y) || visited[y][x] || arr[y][x] !== color) return;
	visited[y][x] = true;

	for (let i = 0; i < 4; i++) {
		dfs(x + dx[i], y + dy[i], color, arr, visited);
	}
}

const count = [0, 0]
const visited = Array.from({ length: n }, () => Array(n).fill(false));
const arr = input.slice(1).map((el) => el.split(''));


for (let i = 0; i < n; i++) {
	for (let j = 0; j < n; j++) {
		if (!visited[i][j]) {
			dfs(j, i, arr[i][j], arr, visited);
			count[0]++;
		}
	}
}

const colorBlindVisited = Array.from({ length: n }, () => Array(n).fill(false));
const colorBlindArr = input.slice(1).map((el) => el.split('').map(v => v === 'G' ? 'R' : v));


for (let i = 0; i < n; i++) {
	for (let j = 0; j < n; j++) {
		if (!colorBlindVisited[i][j]) {
			if (arr[i][j] === 'B') {
				dfs(j, i, 'B', colorBlindArr, colorBlindVisited);
			} else {
				dfs(j, i, 'R', colorBlindArr, colorBlindVisited);
			}
			count[1]++;
		}
	}
}

console.log(count.join(' '));
