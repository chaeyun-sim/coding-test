const stack = []

for (let i = 1; i <= 10000; i++) {
    if (i < 10) {
        stack.push(i + i)
    } else {
        const digits = String(i).split('');
        let sum = i;
        for (const digit of digits) {
            sum += Number(digit);
        }
        stack.push(sum);
    }
}

for (let i = 1; i <= 10000; i++) {
    if (!stack.includes(i)) {
        console.log(i)
    }
}