// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const input = []
	
	for await (const line of rl) {
		input.push(line)
	}
	
	const n = Number(input[0])
	const arr = input.slice(1)
	const map = new Map()
	
	arr.forEach((item, index) => {
		const [count, price] = item.split(' ').map(Number)
		map.set(index + 1, Math.floor(count * price * 10) / 10)
	})
	
	const sorted = [...map.entries()].sort((a, b) => {
    if (b[1] !== a[1]) {
        return b[1] - a[1];
    } else {
        return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
    }
	});

	let result = ''
	
	sorted.forEach((item, idx) => {
		result += item[0]
		
		if (idx !== n - 1) {
			result += ' '
		}
	})
	
	console.log(result)
	
})();
