// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const input = []
	
	for await (const line of rl) {
		input.push(line)
	}
	
	const n = Number(input[0])
	const arr = input[1].split(' ')
	let cnt = new Set()
	
	arr.forEach((num, index) => {
		while (num % 2 === 0) {
			num /= 2
		}
		
		if (num > 1) {
			cnt.add(index + 1)
		}
	})
	
	console.log(cnt.size)
	
	if (cnt.size) {
		console.log([...cnt].join(' '))
	}
	
	process.exit();
})();
