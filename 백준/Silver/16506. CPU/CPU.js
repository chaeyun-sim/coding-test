const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const opcodes = ['ADD', 'SUB', 'MOV', 'AND', 'OR', 'NOT', 'MULT', 'LSFTL', 'LSFTR', 'ASFTR', 'RL', 'RR']

const arr = input.slice(1).map(el => el.split(' '))

function renderOpcode(op) {
    let first = opcodes.findIndex(el => op.startsWith(el)).toString(2)
    if (first.length !== 4) {
        first = '0'.repeat(4 - first.length) + first
    }
    first += op[op.length - 1] === 'C' ? '10' : '00'
    
    return first
}

function renderRD(rD) {
    let second = Number(rD).toString(2)
    if (second.length !== 3) {
        second = '0'.repeat(3 - second.length) + second
    }
    return second
}

function renderRA(rA) {
    let third = ''
    if (['MOV', 'MOVC', 'NOT'].includes(rA)) {
        third = '0'
    } else {
        third = Number(rA).toString(2)
    }
    
    if (third.length !== 3) {
        third = '0'.repeat(3 - third.length) + third
    }
    
    return third
}

function renderRB(op, rB) {
    let fourth = Number(rB).toString(2)
    if (op[op.length - 1] !== 'C') {
        fourth += '0'
        
    }
    if (fourth.length !== 4) {
        fourth = '0'.repeat(4 - fourth.length) + fourth
        }
    
    return fourth
}

arr.forEach(item => {
    const [op, rD, rA, rB] = item;
    let result = ''
    result += renderOpcode(op)
    result += renderRD(rD)
    result += renderRA(rA)
    result += renderRB(op, rB)

    console.log(result)
})