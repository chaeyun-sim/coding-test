const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];

rl.on("line", function(line) {
	input.push(line);
}).on("close", function() {
	const n = Number(input[0]);
	const A = input[1].split(' ').map(Number);
	const B = input[2].split(' ').map(Number);
	const k = Number(input[3]);
	
	const maxValues = new Map();
	const map = new Map();
	
	A.forEach((item, index) => {
		maxValues.set(index + 1, item);
	});
	
	B.forEach((item, index) => {
		map.set(index + 1, item);
	});
	
	function checkOverflow(num) {
		if (!map.has(num)) return;
		map.set(num, map.get(num) + 1);
		
		while (num >= 1 && map.get(num) > maxValues.get(num)) {
			map.set(num, 0);
			if (num > 1) {
				map.set(num - 1, map.get(num - 1) + 1);
			}
			num--;
		}
	}
	
	for (let i = 0; i < k; i++) {
		checkOverflow(n);
	}
	
	console.log([...map.values()].join(''));
	
	process.exit();
});
