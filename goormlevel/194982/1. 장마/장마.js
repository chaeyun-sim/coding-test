// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const input = []
	
	for await (const line of rl) {
		input.push(line)
	}
	
	const [n, m] = input[0].split(' ').map(Number)
	const ground = input[1].split(' ').map(Number)
	const arr = input.slice(2).map(el => el.split(' ').map(Number))
	
	const map = new Map();
	let houses = new Set();
	
	ground.forEach((item, index) => map.set(index + 1, item))
	
	function waterOut() {
		houses.forEach(house => {
			map.set(house, map.get(house) - 1)
		})
		houses.clear()
	}
	
	function watering(first, last) {
		for (let i = first; i <= last; i++) {
			map.set(i, map.get(i) + 1)
			houses.add(i)
		}
	}
	
	arr.forEach((item, index) => {
		const [first, last] = item;
		
		watering(first, last)
		
		if ((index + 1) % 3 === 0) {
			waterOut()
		}
	})
	
	houses.clear()
	
	console.log([...map.values()].join(' '))
	
	process.exit();
})();
