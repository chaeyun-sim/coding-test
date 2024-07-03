const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const testCases = input.slice(1);

const directions = [
    [0, 1],  // North
    [1, 0],  // East
    [0, -1], // South
    [-1, 0]  // West
];

function calculateArea(testCase) {
    const visitedPositions = new Set(['0/0']);
    let gazing = 0;
    let x = 0;
    let y = 0;

    for (const command of testCase) {
        if (command === 'F') {
            x += directions[gazing][1];
            y += directions[gazing][0];
        } else if (command === 'B') {
            x += directions[(gazing + 2) % 4][1];
            y += directions[(gazing + 2) % 4][0];
        } else if (command === 'L') {
            gazing = (gazing - 1 + 4) % 4;
        } else if (command === 'R') {
            gazing = (gazing + 1) % 4;
        }
        visitedPositions.add(`${x}/${y}`);
    }

    const coordinates = [...visitedPositions].map(pos => pos.split('/').map(Number));
    const xCoordinates = coordinates.map(coord => coord[0]);
    const yCoordinates = coordinates.map(coord => coord[1]);

    const width = Math.max(...xCoordinates) - Math.min(...xCoordinates);
    const height = Math.max(...yCoordinates) - Math.min(...yCoordinates);

    return width * height;
}

testCases.forEach(testCase => {
    const area = calculateArea(testCase);
    console.log(area);
});
