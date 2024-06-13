// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	const input = []
	
	for await (const line of rl) {
		input.push(line)
	}
	
	const mirrorPairs = {
        'b': 'd',
        'd': 'b',
        'p': 'q',
        'q': 'p',
        's': 'z',
        'z': 's',
        'i': 'i',
        'l': 'l',
        'm': 'm',
        'n': 'n',
        'o': 'o',
        'u': 'u',
        'v': 'v',
        'w': 'w',
        'x': 'x'
    }
	
	const n = Number(input[0])
	const arr = input.slice(1)
	
	function checkMirrored(str) {
		const limit = str.length % 2 === 0 ? str.length / 2 : Math.ceil(str.length)

		for (let i = 0; i < limit; i++) {
			let current = str[i]
			let opposite = str[str.length - i - 1]
			if (mirrorPairs[current] !== opposite) {
        return false
      }
		}
		return true
	}
	
	arr.forEach(str => {
		console.log(checkMirrored(str) ? 'Mirror' : 'Normal')
	})
	
	process.exit();
})();
