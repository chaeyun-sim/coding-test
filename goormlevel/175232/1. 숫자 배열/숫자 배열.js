// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let n = 0;
	
	for await (const line of rl) {
		n = Number(line)
	}
	
	const arr = new Array(n * n).fill(0).map((_, i) => i + 1)
	let result = ''
	
	for (let i = 0; i < n * n; i += n) {
		result += arr.slice(i, i + n).join(' ')
		if (i !== n * n - n) {
			result += '\n'
		}
	}
	
	console.log(result)
	
	process.exit();
})();
