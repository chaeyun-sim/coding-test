const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [] 
rl.on('line', (line) => {
	input.push(line)
});

rl.on('close', () => {
	let n = Number(input[0])
	let cnt = 0;
	
	while (n >= 14) {
		n -= 14
		cnt++
	}
	while (n >= 7) {
		n -= 7
		cnt++
	}
	while (n >= 1) {
		n -= 1
		cnt++
	}
	if (n >= 7) {
		n -= 7
		cnt++
	}	
	console.log(cnt)
})