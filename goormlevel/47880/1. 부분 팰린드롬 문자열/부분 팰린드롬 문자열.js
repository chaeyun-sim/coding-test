// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let str = ''

rl.on("line", function(line) {
	str = line
	rl.close();
}).on("close", function() {
	if (str.length > 0){
		solution(str)
	} else {
		console.log(0)
	}
	process.exit();
});

function checkValid(str) {
	for (let i = 0; i < Math.floor(str.length / 2); i++) {
		if (str[i] !== str[str.length - 1 - i]) {
			return false
		}
	}
	return true
}

function solution(str) {
	let max = 1
	
	for (let i = 0; i < str.length; i++) {
		for (let j = i + 1; j <= str.length; j++) {
			const value = str.slice(i, j)
			if (checkValid(value)) {
				max = Math.max(max, value.length)
			}
		}
	}
	
	console.log(max)
}