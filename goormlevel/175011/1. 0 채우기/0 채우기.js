// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const input = []
	
	for await (const line of rl) {
		input.push(line)
	}
	
	const n = Number(input[0])
	const arr = input.slice(1).map(el => el.split(' ').map(Number))
	let x = 0;
	let y = 0;
	let sum = 0
	
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (arr[i][j] === 0) {
				x = j;
				y = i;
			}
		}
	}
	
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (i === y || j === x) {
				sum += arr[i][j]
			}
		}
	}
	
	console.log(sum)
})();
