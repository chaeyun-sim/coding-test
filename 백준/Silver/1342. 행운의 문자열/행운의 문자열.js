const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const str = input[0];
const len = str.length;
const resultSet = new Set();
const visited = new Array(len).fill(false);

function isLucky(result) {
    for (let i = 0; i < result.length - 1; i++) {
        if (result[i] === result[i + 1]) return false;
    }
    return true;
}

function dfs(depth, result) {
    if (depth === len) {
        if (isLucky(result)) resultSet.add(result);
        return;
    }

    for (let i = 0; i < len; i++) {
        if (visited[i]) continue;
        if (depth > 1 && result[depth - 2] === result[depth - 1] || result[depth - 1] === str[i]) continue;
        visited[i] = true;
        dfs(depth + 1, result + str[i]);
        visited[i] = false;
    }
}


dfs(0, '')
console.log(resultSet.size)