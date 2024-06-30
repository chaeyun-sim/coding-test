// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const input = []
	
	for await (const line of rl) {
		input.push(line)
	}
	
	const n = Number(input[0])
	for (let i = 1; i <= n; i++) {
		console.log('*'.repeat(i))
	}
	
	process.exit();
})();
