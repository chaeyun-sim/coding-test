const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [s, n] = input[0].split(' ')
s = Number(s)

const width = s + 2;
const height = 2 * s + 3;
const halfHeight = Math.floor(height / 2);
const endsAndCenter = [0, height - 1, halfHeight];

function needEndsAndCenter(space, arr) {
    arr.forEach(pos => {
        for (let i = 1; i < width - 1; i++) {
            space[pos][i] = '-';
        }
    });
    
    return space;
}

function handleRightRight(space, i, width) {
    space[i][width - 1] = '|';
}

function handleLeftRight(space, i, width, height) {
    if (i < halfHeight) {
        space[i][0] = '|';
    } else {
        space[i][width - 1] = '|';
    }
}

function handleLeftLeft(space, i) {
    space[i][0] = '|';
}

function handleRightLeft(space, i, width, height) {
    if (i < halfHeight) {
        space[i][width - 1] = '|';
    } else {
        space[i][0] = '|';
    }
}

function handleDoubleRight(space, i, width, height) {
    if (i < halfHeight) {
        space[i][0] = '|';
        space[i][width - 1] = '|';
    } else {
        space[i][width - 1] = '|';
    }
}

function handleLeftDouble(space, i, width, height) {
    if (i < halfHeight) {
        space[i][0] = '|';
    } else {
        space[i][0] = '|';
        space[i][width - 1] = '|';
    }
}

function handleDoubleDouble(space, i, width) {
    space[i][0] = '|';
    space[i][width - 1] = '|';
}

function lines(space, direction) {
    let newSpace = space;
    for (let i = 0; i < height; i++) {
        if (!endsAndCenter.includes(i)) {
            switch (direction) {
                case 'right right':
                    handleRightRight(newSpace, i, width);
                    break;
                case 'left right':
                    handleLeftRight(newSpace, i, width, height);
                    break;
                case 'left left':
                    handleLeftLeft(newSpace, i);
                    break;
                case 'right left':
                    handleRightLeft(newSpace, i, width, height);
                    break;
                case 'double right':
                    handleDoubleRight(newSpace, i, width, height);
                    break;
                case 'left double':
                    handleLeftDouble(newSpace, i, width, height);
                    break;
                case 'double double':
                    handleDoubleDouble(newSpace, i, width);
                    break;
                default:
                    console.error('Invalid direction');
            }
        }
    }
    return newSpace;
}

function createSpace() {
    return Array.from({ length: height }, () => Array(width).fill(' '));
}

function renderDigit(space, linesConfig, endsConfig) {
    space = needEndsAndCenter(space, endsConfig);
    space = lines(space, linesConfig);
    return space.map(row => row.join(''));
}

function getDigitRenderFunction(digit) {
    switch (digit) {
        case '1': return () => renderDigit(createSpace(), 'right right', []);
        case '2': return () => renderDigit(createSpace(), 'right left', endsAndCenter);
        case '3': return () => renderDigit(createSpace(), 'right right', endsAndCenter);
        case '4': return () => renderDigit(createSpace(), 'double right', [halfHeight]);
        case '5': return () => renderDigit(createSpace(), 'left right', endsAndCenter);
        case '6': return () => renderDigit(createSpace(), 'left double', endsAndCenter);
        case '7': return () => renderDigit(createSpace(), 'right right', [0]);
        case '8': return () => renderDigit(createSpace(), 'double double', endsAndCenter);
        case '9': return () => renderDigit(createSpace(), 'double right', endsAndCenter);
        case '0': return () => renderDigit(createSpace(), 'double double', [0, height - 1]);
        default: return () => [];
    }
}

function renderNumbers(numbers) {
    const linesArray = Array.from({ length: height }, () => '');

    for (const digit of numbers) {
        const digitLines = getDigitRenderFunction(digit)();
        for (let i = 0; i < height; i++) {
            linesArray[i] += digitLines[i] + ' ';
        }
    }

    linesArray.forEach(line => console.log(line));
}

renderNumbers(n.toString());

