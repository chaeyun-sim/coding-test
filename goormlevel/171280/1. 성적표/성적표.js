// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const input = [];
	
	for await (const line of rl) {
		input.push(line)
	}
	
	const [n, m] = input[0].split(' ').map(Number)
	const arr = input.slice(1).map(el => el.split(' ').map(Number))
	const map = new Map();
	
	arr.forEach(item => {
		const [num, score] = item;
		if (map.has(num)) {
			map.get(num).push(score)
		} else {
			map.set(num, [score])
		}
	})
	
	
	let max = 0;
	let maxSubject = 0
	
	for (const [key, value] of map) {
    const avg = value.reduce((a, b) => a + b) / value.length;
    if (avg > max || (avg === max && key < maxSubject)) {
        max = avg;
        maxSubject = key;
    }
  }

    console.log(maxSubject);
	
	process.exit();
})();
