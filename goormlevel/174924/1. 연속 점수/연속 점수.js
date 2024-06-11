// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const input = []
	for await (const line of rl) {
		input.push(line)
		rl.close();
	}
	
	const n = Number(input[0])
	const scores = input[1].split(' ').map(Number)
	const filtered = [...new Set(scores)].sort((a, b) => a - b)
	
	let max = scores[0];
	let sum = scores[0];
	for (let i = 1; i < scores.length; i++) {
			if (scores[i] - scores[i - 1] === 1) {
					sum += scores[i];
			} else {
					sum = scores[i];
			}
			max = Math.max(max, sum);
	}
	
	console.log(max)
	
	process.exit();
})();
