const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });
    const input = [];
    
    for await (const line of rl) {
        input.push(line);
    }
    
    let n = BigInt(input[0]);
    
    function factorial(num) {
        let result = 1n;
        for (let i = 1n; i <= num; i++) {
            result *= i;
        }
        return result;
    }
    
    n = factorial(n);
    
    while (n >= 10n) {
        n = [...n.toString()].reduce((a, b) => a + BigInt(b), 0n);
    }
    
    console.log(n.toString());
    
    process.exit();
})();
