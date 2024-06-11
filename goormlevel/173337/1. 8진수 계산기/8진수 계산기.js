// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const input = []
	for await (const line of rl) {
		input.push(line)
	}
	const t = Number(input[0])
	const arr = input[1].split(' ').map(Number)
	let sum = 0
	
	arr.forEach(num => sum += num)
	
	console.log(sum.toString(8))
	
	process.exit();
})();
