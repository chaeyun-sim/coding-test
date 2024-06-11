const readline = require('readline');

(async () => {
    const rl = readline.createInterface({ input: process.stdin });
    const input = [];
    const numbers = {
        'qw': 1,
        'as': 2,
        'zx': 3,
        'we': 4,
        'sd': 5,
        'xc': 6,
        'er': 7,
        'df': 8,
        'cv': 9,
        'ze': 0,
    };
    
    for await (const line of rl) {
        input.push(line);
    }
    
    const n = Number(input[0]);
    const str = input[1];
    let result = '';
    
    for (let i = 0; i < n - 1; i++) {
        const value = str.substr(i, 2);
        if (numbers[value] !== undefined) {
            result += numbers[value];
            if (i < n - 2 && str[i + 2] === value[0]) {
                i++;
            }
        }
    }
    
    console.log(result);
    rl.close();
    process.exit();
})();
