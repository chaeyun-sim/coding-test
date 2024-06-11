// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const input = []
	for await (const line of rl) {
		input.push(line)
	}

	const t = Number(input[0])
	const arr = input.slice(1).map(el => el.split(' ').reduce((a, b) => Number(a) * Number(b)))
	console.log(Math.max(...arr))
	
	process.exit();
})();
