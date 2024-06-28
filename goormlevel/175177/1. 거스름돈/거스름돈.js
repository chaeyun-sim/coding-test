// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const input = []
	
	for await (const line of rl) {
		input.push(line)
	}
	
	const budget = Number(input[0])
	const coins = [40, 20, 10, 5, 1]
	let total = 0;
	let left = budget;
	
	coins.forEach(coin => {
		total += Math.floor(left / coin)
		left = left % coin
	})
	
	console.log(total)
	process.exit();
})();
