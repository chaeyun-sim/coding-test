const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const arr = input.slice(1).map(Number)
const units = [25, 10, 5, 1]

arr.forEach(num => {
    const quarters = Math.floor(num / units[0]);
    num %= units[0];
    
    const dimes = Math.floor(num / units[1]);
    num %= units[1];
    
    const nickels = Math.floor(num / units[2]);
    num %= units[2];
    
    const pennies = Math.floor(num / units[3]);

    console.log(quarters, dimes, nickels, pennies)
});