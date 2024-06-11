// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const input = []
	for await (const line of rl) {
		input.push(line)
		// rl.close();
	}
	
	const [n, t] = input[0].split(' ')
	let result = 0;
	
	for (let r = 2; r <= 16; r++) {
		if (Number(n).toString(r) === t.toLowerCase()) {
			result = r
			break;
		}
	}
	
	console.log(result)
	
	process.exit();
})();
